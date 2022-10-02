import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import fs from 'fs';
import Layout from '../components/Layout';
import { getColorLibObject, sortWithClusters } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Cluster, ColorObject, MegaColor } from '../types';

const colornerdDir = './node_modules/colornerd';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript

  const filename = `${colornerdDir}/json/${context.query.book}.json`;
  // console.log({ filename });
  const records = JSON.parse(fs.readFileSync(`${filename}`, 'utf8'));
  // console.log({ records });

  return {
    props: { records }, // will be passed to the page component as props
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

const BookPage: NextPage = ({ records }: any) => {
  // console.log({ books });
  const colorsInBook: MegaColor[] = records.map((colorObject: ColorObject) => {
    return { ...colorObject, colorLibObject: getColorLibObject(colorObject) };
  });
  // sortArray(colorsInBook);
  const sortedClusters = sortWithClusters(colorsInBook);
  const sortedColorsInBook: Cluster[] = sortedClusters.reduce((acc, curr) => {
    const colors = curr.colors.map((color) => color);
    return [...acc, ...colors];
  }, []);
  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

      <div className={styles.grid} />

      <div className="colors">
        {sortedColorsInBook.map((color: any) => (
          <ColorCell key={color.hex} color={color} />
        ))}
      </div>
    </Layout>
  );
};

export default BookPage;
