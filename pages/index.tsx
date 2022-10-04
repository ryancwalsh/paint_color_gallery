import type { NextPage } from 'next';
import Wheel from '@uiw/react-color-wheel'; // https://uiwjs.github.io/react-color/
import Layout from '../components/Layout';
import { getFilteredColors } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import useLocalStorage from '../helpers/localStorage';
import { MegaColor } from '../types';
import megaColors from '../data/colornerd.json';

function ColorCell({ megaColor }: any): JSX.Element {
  // console.log({ megaColor });
  const { colorLibObject } = megaColor;

  return (
    <div style={{ background: colorLibObject.hsl(), padding: '0.5rem', display: 'inline-block', width: '100px', height: '100px', margin: '2px' }}>
      <div className="colorName">{megaColor.name}</div>
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {megaColor.book}
      </div>
    </div>
  );
}

function TaskList(): JSX.Element {
  return (
    <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
      TODO: - get color wheel working - fix types in VSC - deploy to GH Pages - support loading new JSON book to localStorage - filter which books to include - allow clustering by
      book - add 2 other styles of color picker, synched with the first - add a tool that allows picking a color from somewhere else on the screen, such as a photo - add Google
      Analytics - get a URL
    </pre>
  );
}

function Sliders({ toleranceH, setToleranceH, toleranceS, setToleranceS, toleranceL, setToleranceL }: any): JSX.Element {
  return (
    <div>
      <label>
        <input type="range" defaultValue={toleranceH} onChange={(event) => setToleranceH(Number(event.target.value))} min="0" max="100" step="1" />
        {toleranceH}
      </label>
      <label>
        <input type="range" defaultValue={toleranceS} onChange={(event) => setToleranceS(Number(event.target.value))} min="0" max="100" step="1" />
        {toleranceS}
      </label>
      <label>
        <input type="range" defaultValue={toleranceL} onChange={(event) => setToleranceL(Number(event.target.value))} min="0" max="100" step="1" />
        {toleranceL}
      </label>
    </div>
  );
}

const Home: NextPage = () => {
  // console.log({ megaColors });
  const [targetColor, setTargetColor] = useLocalStorage<string>('targetColor', 'hsl(70deg 89% 49%)');
  const [toleranceH, setToleranceH] = useLocalStorage<number>('toleranceH', 3);
  const [toleranceS, setToleranceS] = useLocalStorage<number>('toleranceS', 3);
  const [toleranceL, setToleranceL] = useLocalStorage<number>('toleranceL', 3);

  const results = getFilteredColors(targetColor, megaColors, toleranceH, toleranceS, toleranceL);
  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>
      <Wheel
        color={targetColor}
        onChange={(colorFromWheel) => {
          console.log({ colorFromWheel }, colorFromWheel.hex);
          setTargetColor(colorFromWheel.hex);
        }}
      />
      <Sliders {...{ toleranceH, setToleranceH, toleranceS, setToleranceS, toleranceL, setToleranceL }} />
      <div style={{ backgroundColor: targetColor }}>
        <div className="colors">
          {results.map((colorInMap: MegaColor) => (
            <ColorCell key={`${colorInMap.book}_${colorInMap.color}`} megaColor={colorInMap} />
          ))}
        </div>
        <TaskList />
      </div>
    </Layout>
  );
};

export default Home;
