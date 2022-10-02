import type { GetServerSidePropsContext, NextPage } from 'next';
import fs from 'fs';
import { GetServerSideProps } from 'next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colorLib from 'color'; // https://github.com/Qix-/color
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

const colornerdDir = './node_modules/colornerd';
const dir = `${colornerdDir}/_dev/`;

type ColorObj = any;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
  const bookFileDetailObjects = JSON.parse(fs.readFileSync(`${dir}books.json`, 'utf8'));
  // console.log({ bookFileDetailObjects });
  const books: any = {};
  bookFileDetailObjects.forEach(function (bookFileDetailObject: any) {
    const filename = `${colornerdDir}/json/${bookFileDetailObject.filename}.json`;
    // console.log({ filename });
    if (filename === './node_modules/colornerd/json/sherwin-williams.json') {
      // TODO Don't filter to filename in a hard-coded way.
      const records = JSON.parse(fs.readFileSync(`${filename}`, 'utf8'));
      // console.log({ records });
      books[filename] = records;
    }
  });
  return {
    props: { books }, // will be passed to the page component as props
  };
};

function getHsl(color: ColorObj) {
  let hsl;
  try {
    const colorObj = colorLib(color.hex);
    hsl = colorObj.hsl();
  } catch (error) {
    console.error({ error, color });
  }
  return hsl;
}

function getHue(color: ColorObj) {
  let hue;
  try {
    const colorObj = colorLib(color.hex);
    hue = colorObj.hue();
  } catch (error) {
    console.error({ error, color });
  }
  return hue;
}

function sortArray(array: ColorObj[], compareValueGetter: any) {
  // https://stackoverflow.com/a/54383087/470749 and I should consider https://tomekdev.com/posts/sorting-colors-in-js too
  array.sort((elem1, elem2) => {
    const value1 = compareValueGetter(elem1);
    const value2 = compareValueGetter(elem2);
    // eslint-disable-next-line no-nested-ternary
    return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
  });
}

function ColorCell({ index, color }: any): JSX.Element {
  const hsl = getHsl(color);

  return (
    <div key={index} style={{ background: hsl, padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px' }}>
      {color.name}
    </div>
  );
}
function ColorBook({ index, books, filename }: any): JSX.Element {
  const colorsInBook = books[filename].map((color: ColorObj) => {
    return { ...color, hsl: getHsl(color), hue: getHue(color) };
  });
  sortArray(colorsInBook, (color: ColorObj) => color.hue);
  return (
    <div key={index}>
      <h2>{filename}</h2>
      <div className="colors">
        {colorsInBook.map((color: any) => (
          <ColorCell key={color.hex} color={color} />
        ))}
      </div>
    </div>
  );
}

function ColorBooks({ books }: any): JSX.Element {
  return (
    <>
      {Object.keys(books).map((filename: any) => (
        <ColorBook key={filename} books={books} filename={filename} />
      ))}
    </>
  );
}

const Home: NextPage = ({ books }: any) => {
  // console.log({ books });

  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

      <div className={styles.grid} />
      <ColorBooks books={books} />
    </Layout>
  );
};

export default Home;
