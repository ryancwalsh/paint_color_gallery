import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Layout from '../components/Layout';
import { getFilteredColors } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import useLocalStorage from '../helpers/localStorage';
import { MegaColor } from '../types/index';
import { getMegaColorsFromColornerdJsonFiles } from '../data/assembleColornerdData';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
  const megaColors = getMegaColorsFromColornerdJsonFiles();

  return {
    props: { megaColors }, // will be passed to the page component as props
  };
};

function ColorCell({ index, color }: any): JSX.Element {
  const { colorLibObject } = color;

  return (
    <div key={index} style={{ background: colorLibObject.hsl(), padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px', margin: '2px' }}>
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

const Home: NextPage = ({ megaColors }: { megaColors: MegaColor[] }) => {
  // console.log({ megaColors });
  const [color, setColor] = useLocalStorage<string>('color', 'hsl(50deg 89% 49%)');
  const toleranceH = 0.1;
  const toleranceS = 0.2;
  const toleranceL = 0.2;

  const results = getFilteredColors(color, megaColors, toleranceH, toleranceS, toleranceL);
  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

      <div style={{ backgroundColor: color }}>
        <ColorBook megaColors={results} />
        {/* prettier-ignore */}
        <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
        TODO: 
        
        - import colornerd data from frontend instead of getServerSideProps so that the repo can be deployed as a static site
        - add a color picker https://iro.js.org/advanced.html
        - deploy to GH Pages
        - support loading new JSON book to localStorage
        - filter which books to include 
        - allow clustering by book
        - add 2 other styles of color picker, synched with the first 
        - add a tool that allows picking a color from somewhere else on the screen, such as a photo 
        - add Google Analytics 
        - get a URL
        </pre>
      </div>
    </Layout>
  );
};

export default Home;
