import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import fs from 'fs';
import Layout from '../components/Layout';
import { getColorLibObject } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import useLocalStorage from '../helpers/localStorage';
import { BookFileDetailObject, ColorNerdRecord, MegaColor } from '../types/index';

const colornerdDir = './node_modules/colornerd';
const dir = `${colornerdDir}/_dev/`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
  const bookFileDetailObjects = JSON.parse(fs.readFileSync(`${dir}books.json`, 'utf8'));
  // console.log({ bookFileDetailObjects });
  let megaColors: MegaColor[] = [];
  bookFileDetailObjects.forEach(function (bookFileDetailObject: BookFileDetailObject) {
    const filename = `${colornerdDir}/json/${bookFileDetailObject.filename}.json`;
    // console.log({ filename });

    const recordsInBook = JSON.parse(fs.readFileSync(`${filename}`, 'utf8'));
    //  console.log({ recordsInBook });
    const labeledRecordsInBook = recordsInBook.map((record: ColorNerdRecord) => {
      // const colorLibObject = getColorLibObject(record);
      return { ...record, book: bookFileDetailObject.title };
    });
    // console.log({ megaColors });
    megaColors = [...megaColors, ...labeledRecordsInBook];
  });
  return {
    props: { megaColors }, // will be passed to the page component as props
  };
};

function ColorCell({ index, color }: any): JSX.Element {
  const { colorLibObject } = color;

  return (
    <div key={index} style={{ background: colorLibObject.hsl(), padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px' }}>
      <div className="colorName">{color.name}</div>
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {color.book}
      </div>
    </div>
  );
}

function ColorBook({ megaColors }: { megaColors: MegaColor[] }): JSX.Element {
  return (
    <div className="colors">
      {megaColors.map((color: MegaColor) => (
        <ColorCell key={color.hex} color={color} />
      ))}
    </div>
  );
}

function isHueWithinTolerance(hue: number, hueToMatch: number, percentageTolerance: number): boolean {
  // TODO: Does this properly handle hue wrap-around?
  // console.log({ hue, hueToMatch, percentageTolerance });
  const hueToMatchMin = hueToMatch - hueToMatch * percentageTolerance;
  const hueToMatchMax = hueToMatch + hueToMatch * percentageTolerance;
  return hue >= hueToMatchMin && hue <= hueToMatchMax;
}

function isSaturationWithinTolerance(saturation: number, saturationToMatch: number, percentageTolerance: number): boolean {
  // TODO: Does this properly handle saturation wrap-around?
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const saturationToMatchMin = (saturationToMatch * 100 - saturationToMatch * 100 * percentageTolerance) / 100;
  const saturationToMatchMax = (saturationToMatch * 100 + saturationToMatch * 100 * percentageTolerance) / 100;
  return saturation >= saturationToMatchMin && saturation <= saturationToMatchMax;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFilteredColors(color: string, megaColors: MegaColor[], toleranceH: number, toleranceS: number, toleranceL: number): MegaColor[] {
  const targetColorLibObject = getColorLibObject(color);
  console.log({ targetColorLibObject });
  const results: MegaColor[] = [];
  for (let i = 0; i < megaColors.length; i += 1) {
    const megaColor = megaColors[i];
    const megaColorLibObject = getColorLibObject(megaColor.hex);
    if (
      isHueWithinTolerance(megaColorLibObject.hue(), targetColorLibObject.hue(), toleranceH)
      // && isSaturationWithinTolerance(megaColorLibObject.saturationl(), targetColorLibObject.saturationl(), toleranceS)
    ) {
      // TODO
      results.push({ ...megaColor, colorLibObject: megaColorLibObject });
    }
  }
  return results;
}

const Home: NextPage = ({ megaColors }: { megaColors: MegaColor[] }) => {
  // console.log({ megaColors });
  const [color, setColor] = useLocalStorage<string>('color', 'hsl(291deg 89% 49%)');
  const toleranceH = 0.1;
  const toleranceS = 0.1;
  const toleranceL = 0.05;

  // TODO: filter which books to include

  const results = getFilteredColors(color, megaColors, toleranceH, toleranceS, toleranceL);
  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

      <div style={{ width: '100px', height: '100px', backgroundColor: color }} />
      <ColorBook megaColors={results} />
    </Layout>
  );
};

export default Home;
