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

function getColorLibObject(color: ColorObj): typeof colorLib {
  let colorLibObject;
  try {
    colorLibObject = colorLib(color.hex);
  } catch (error) {
    console.error({ error, color });
  }
  return colorLibObject;
}

function sortArray(array: ColorObj[]) {
  // https://stackoverflow.com/a/54383087/470749 and I should consider https://tomekdev.com/posts/sorting-colors-in-js too
  array.sort((elem1, elem2) => {
    const value1 = elem1.colorLibObject.hue();
    const value2 = elem2.colorLibObject.hue();

    if (value1 > value2) return 1;
    else if (value1 < value2) return -1;
    else return 0;
  });
}

function ColorCell({ index, color }: any): JSX.Element {
  const colorLibObject = getColorLibObject(color);

  return (
    <div key={index} style={{ background: colorLibObject.hsl(), padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px' }}>
      {color.name}
    </div>
  );
}
function ColorBook({ index, books, filename }: any): JSX.Element {
  const colorsInBook = books[filename].map((color: ColorObj) => {
    return { ...color, colorLibObject: getColorLibObject(color) };
  });
  sortArray(colorsInBook);
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
