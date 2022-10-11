/* eslint-disable canonical/filename-match-exported */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDebounce, useLocalStorage } from 'usehooks-ts';

import Layout from '../components/Layout';
import megaColors from '../data/colornerd.json';
import { getFilteredColors, getHueTolerance, getColorDetailsObject } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import { MegaColor } from '../types';

function ColorCell({ megaColor }: { megaColor: MegaColor }): JSX.Element {
  // console.log({ megaColor });
  const { colorDetailsObject } = megaColor;

  return (
    <div
      style={{ background: colorDetailsObject.hsl(), display: 'inline-block', height: '100px', margin: '2px', padding: '0.5rem', width: '100px' }}
      data-json={JSON.stringify(megaColor)}
    >
      <div className="colorName">{megaColor.name}</div>
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {megaColor.book}
      </div>
    </div>
  );
}

function TaskList(): JSX.Element {
  // TODO: https://stackoverflow.com/questions/74020543/how-to-disable-prettier-for-pre-or-code-blocks-so-that-new-lines-line-break
  // prettier-ignore-start
  return (
    <pre style={{ maxWidth: '900px', overflow: 'auto' }}>
      TODO: - fix types in VSC - add a tool that allows picking a color from somewhere else on the screen, such as a photo - get color wheel working - deploy to GH Pages - support
      loading new JSON book to localStorage - filter which books to include - allow clustering by book - add 2 other styles of color picker, synched with the first - add Google
      Analytics - get a URL
    </pre>
  );
  // prettier-ignore-end
}

function Sliders({ toleranceH, setToleranceH, toleranceS, setToleranceS, toleranceL, setToleranceL }: any): JSX.Element {
  return (
    <div>
      <label>
        <input type="range" defaultValue={toleranceH} onChange={(event) => setToleranceH(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceH}
      </label>
      <label>
        <input type="range" defaultValue={toleranceS} onChange={(event) => setToleranceS(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceS}
      </label>
      <label>
        <input type="range" defaultValue={toleranceL} onChange={(event) => setToleranceL(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceL}
      </label>
    </div>
  );
}

const Home: NextPage = () => {
  // console.log({ megaColors });
  const [loadedMegaColors, setLoadedMegaColors] = useLocalStorage<MegaColor[]>('loadedMegaColors', [...megaColors]); // Eventually, using the hard-coded file will be optional because the user will also be allowed to supply their own JSON.
  const [targetColor, setTargetColor] = useLocalStorage<string>('targetColor', 'hsl(20deg 80% 40%)');

  // const [toleranceH, setToleranceH] = useLocalStorage<number>('toleranceH', 3);
  // const [toleranceS, setToleranceS] = useLocalStorage<number>('toleranceS', 3);
  // const [toleranceL, setToleranceL] = useLocalStorage<number>('toleranceL', 3);
  const [toleranceH, setToleranceH] = useState<number>(3);
  const [toleranceS, setToleranceS] = useState<number>(3);
  const [toleranceL, setToleranceL] = useState<number>(3);
  // console.log({ toleranceH, toleranceL, toleranceS });

  const [results, setResults] = useState<MegaColor[]>([]);

  const debouncedToleranceH = useDebounce<number>(toleranceH, 200);
  const debouncedToleranceS = useDebounce<number>(toleranceS, 200);
  const debouncedToleranceL = useDebounce<number>(toleranceL, 200);
  // console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });

  useEffect(() => {
    console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });
    const targetColorDetailsObject = getColorDetailsObject(targetColor);
    console.log({ targetColorDetailsObject });
    const degreeTolerance = (360 / 100) * debouncedToleranceH;
    const [hueMin, hueMax] = getHueTolerance(targetColorDetailsObject.hue(), degreeTolerance);
    const filteredColors = getFilteredColors(targetColorDetailsObject, loadedMegaColors, hueMin, hueMax, debouncedToleranceS, debouncedToleranceL);
    // console.log({ filteredColors });
    setResults(filteredColors);
    return () => {
      // console.log('cleanup');
    };
  }, [targetColor, loadedMegaColors, debouncedToleranceH, debouncedToleranceS, debouncedToleranceL]); // Only re-run the effect if a value changes.

  return (
    <Layout>
      <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

      <Sliders {...{ setToleranceH, setToleranceL, setToleranceS, toleranceH, toleranceL, toleranceS }} />
      <div style={{ backgroundColor: targetColor }}>
        <div className="colors">
          {results.map((colorInMap: MegaColor) => (
            <ColorCell key={`${colorInMap.book}_${colorInMap.code}`} megaColor={colorInMap} />
          ))}
        </div>
        <TaskList />
      </div>
    </Layout>
  );
};

export default Home;
