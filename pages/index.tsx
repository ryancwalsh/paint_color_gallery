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

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
  const bookFileDetailObjects = JSON.parse(fs.readFileSync(`${dir}books.json`, 'utf8'));
  // console.log({ bookFileDetailObjects });
  const books: any = {};
  bookFileDetailObjects.forEach(function (bookFileDetailObject: any) {
    const filename = `${colornerdDir}/json/${bookFileDetailObject.filename}.json`;
    const records = JSON.parse(fs.readFileSync(`${filename}`, 'utf8'));
    // console.log({ records });
    books[filename] = records;
  });
  return {
    props: { books }, // will be passed to the page component as props
  };
};

function ColorCell({ index, color }: any): JSX.Element {
  let hsl;
  try {
    const colorObj = colorLib(color.hex);
    hsl = colorObj.hsl();
  } catch (error) {
    console.error({ error, color });
  }

  return (
    <div key={index} style={{ background: hsl, padding: '1rem' }}>
      {color.name}
    </div>
  );
}
function ColorBook({ index, books, filename }: any): JSX.Element {
  const colorsInBook = books[filename];
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
