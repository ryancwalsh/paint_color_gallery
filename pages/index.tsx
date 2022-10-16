/* eslint-disable canonical/filename-match-exported */

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useEyeDrop, EyeDropper, OnChangeEyedrop } from 'react-eyedrop';
import { useDebounce, useLocalStorage } from 'usehooks-ts';

import ClientOnly from '../components/ClientOnly';
import ColorLibraryFileChooser from '../components/ColorLibraryFileChooser';
import Layout from '../components/Layout';
import Sliders from '../components/Sliders';
import TaskList from '../components/TaskList';
import UploadAndDisplayImage from '../components/UploadAndDisplayImage';
import { getFilteredColors, getHueTolerance, getColorDetailsObject, getBookNames, getMegaColorsFilteredByBookNames } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import { MegaColor } from '../types';

function ColorCell({ megaColor }: { megaColor: MegaColor }): JSX.Element {
  // console.log({ megaColor });
  const { colorDetailsObject } = megaColor;

  return (
    <div
      style={{ background: colorDetailsObject.hsl(), display: 'inline-block', height: '150px', margin: '2px', padding: '0.5rem', width: '150px' }}
      data-json={JSON.stringify(megaColor)}
    >
      <div className="colorName">{megaColor.name}</div>
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {megaColor.book}
      </div>
      <div className="hsl" style={{ fontSize: '0.7rem' }}>
        {megaColor.colorDetailsObject
          .hsl()
          .color.map((value: number) => value.toFixed(1))
          .join(', ')}
      </div>
    </div>
  );
}

// const Home: NextPage<{ megaColors: MegaColor[] }> = ({ megaColors }) => {
const Home: NextPage<{}> = () => {
  const megaColors: MegaColor[] = [];
  const bookNames = getBookNames(megaColors);
  console.log({ bookNames, megaColors });
  const [selectedBookNames, setSelectedBookNames] = useLocalStorage<string[]>('selectedBookNames', ['Sherwin Williams']);
  const [loadedMegaColors, setLoadedMegaColors] = useLocalStorage<MegaColor[]>('loadedMegaColors', [...getMegaColorsFilteredByBookNames(megaColors, selectedBookNames)]); // Eventually, using the hard-coded file will be optional because the user will also be allowed to supply their own JSON.
  const [targetColor, setTargetColor] = useLocalStorage<string>('targetColor', 'hsl(80deg 50% 70%)');
  const [eyedropOnce, setEyedropOnce] = useLocalStorage<boolean>('eyedropOnce', false);

  const [toleranceH, setToleranceH] = useLocalStorage<number>('toleranceH', 3); // https://stackoverflow.com/questions/74022328/how-to-solve-react-hydration-error-in-next-js-when-using-uselocalstorage-and
  const [toleranceS, setToleranceS] = useLocalStorage<number>('toleranceS', 3);
  const [toleranceL, setToleranceL] = useLocalStorage<number>('toleranceL', 3);
  // console.log({ toleranceH, toleranceL, toleranceS });

  const [results, setResults] = useState<MegaColor[]>([]);

  const debouncedToleranceH = useDebounce<number>(toleranceH, 200);
  const debouncedToleranceS = useDebounce<number>(toleranceS, 200);
  const debouncedToleranceL = useDebounce<number>(toleranceL, 200);
  // console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: eyedropOnce,
  });

  const onChangeEyedropperColor = ({ hex }: OnChangeEyedrop) => {
    setTargetColor(hex);
  };

  const toggleOnce = () => {
    setEyedropOnce(!eyedropOnce);
  };

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
    <ClientOnly>
      <Layout>
        <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

        <ColorLibraryFileChooser {...{ setLoadedMegaColors }} />
        <Sliders {...{ setToleranceH, setToleranceL, setToleranceS, toleranceH, toleranceL, toleranceS }} />
        <UploadAndDisplayImage maxWidth={'600px'} />
        <div className="eyedrop-wrapper">
          <EyeDropper once={eyedropOnce} onChange={onChangeEyedropperColor}>
            Pick Color
          </EyeDropper>

          <p>Once: {eyedropOnce.toString()}</p>
          <button onClick={toggleOnce}>Toggle `once` prop</button>
        </div>
        <div style={{ backgroundColor: targetColor, marginTop: '1rem', padding: '1rem' }}>
          <div className="colors">
            {results.map((colorInMap: MegaColor) => (
              <ColorCell key={`${colorInMap.book}_${colorInMap.code}`} megaColor={colorInMap} />
            ))}
          </div>
          <TaskList />
        </div>
      </Layout>
    </ClientOnly>
  );
};

export default Home;
