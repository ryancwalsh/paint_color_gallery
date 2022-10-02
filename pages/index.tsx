import type { GetServerSidePropsContext, NextPage } from 'next';
import fs from 'fs';
import Layout from '../components/Layout';
import { getColorLibObject, sortWithClusters } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Cluster, ColorObject, MegaColor } from '../types';

const colornerdDir = './node_modules/colornerd';
const dir = `${colornerdDir}/_dev/`;

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

function ColorCell({ index, color }: any): JSX.Element {
  const colorLibObject = getColorLibObject(color);

  return (
    <div key={index} style={{ background: colorLibObject.hsl(), padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px' }}>
      {color.name}
    </div>
  );
}
function ColorBook({ index, books, filename }: any): JSX.Element {
  const colorsInBook: MegaColor[] = books[filename].map((colorObject: ColorObject) => {
    return { ...colorObject, colorLibObject: getColorLibObject(colorObject) };
  });
  // sortArray(colorsInBook);
  const sortedClusters = sortWithClusters(colorsInBook);
  const sortedColorsInBook: Cluster[] = sortedClusters.reduce((acc, curr) => {
    const colors = curr.colors.map((color) => color);
    return [...acc, ...colors];
  }, []);
  return (
    <div key={index}>
      <h2>{filename}</h2>
      <div className="colors">
        {sortedColorsInBook.map((color: any) => (
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
