/* eslint-disable canonical/filename-match-exported */

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useEyeDrop, EyeDropper, OnChangeEyedrop } from 'react-eyedrop';
import { useDebounce, useLocalStorage } from 'usehooks-ts';

import ClientOnly from '../components/ClientOnly';
import ColorCell from '../components/ColorCell';
import ColorLibraryFileChooser from '../components/ColorLibraryFileChooser';
import Layout from '../components/Layout';
import SelectBookNames from '../components/SelectBookNames';
import Sliders from '../components/Sliders';
import TaskList from '../components/TaskList';
import UploadAndDisplayImage from '../components/UploadAndDisplayImage';
import { getFilteredColors, getHueTolerance, getColorDetailsObject, getMegaColorsFilteredByBookNames, getDefaultColors, getMegaColorFromCode } from '../helpers/colors';
import styles from '../styles/Home.module.scss';
import { MegaColor } from '../types';

const Home: NextPage<{}> = () => {
  const [selectedBookNames, setSelectedBookNames] = useLocalStorage<string[]>('selectedBookNames', []);
  const [loadedMegaColors, setLoadedMegaColors] = useLocalStorage<MegaColor[]>('loadedMegaColors', []);
  const [megaColorsFilteredByBookNames, setMegaColorsFilteredByBookNames] = useState<MegaColor[]>([]);
  const [targetColor, setTargetColor] = useLocalStorage<string>('targetColor', 'hsl(80deg 50% 70%)');
  const [eyedropOnce, setEyedropOnce] = useLocalStorage<boolean>('eyedropOnce', false);

  const [toleranceH, setToleranceH] = useLocalStorage<number>('toleranceH', 3); // https://stackoverflow.com/questions/74022328/how-to-solve-react-hydration-error-in-next-js-when-using-uselocalstorage-and
  const [toleranceS, setToleranceS] = useLocalStorage<number>('toleranceS', 3);
  const [toleranceL, setToleranceL] = useLocalStorage<number>('toleranceL', 3);
  // console.log({ toleranceH, toleranceL, toleranceS });

  const [results, setResults] = useState<MegaColor[]>([]);
  const [targetMegaColor, setTargetMegaColor] = useState<MegaColor | null>(null);

  const [previousColor, setPreviousColor] = useLocalStorage<string | null>('previousColor', null);

  const debouncedToleranceH = useDebounce<number>(toleranceH, 200);
  const debouncedToleranceS = useDebounce<number>(toleranceS, 200);
  const debouncedToleranceL = useDebounce<number>(toleranceL, 200);
  // console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: eyedropOnce,
  });

  const onChangeEyedropperColor = ({ hex }: OnChangeEyedrop) => {
    setPreviousColor(targetColor);
    setTargetColor(hex);
  };

  const toggleOnce = () => {
    setEyedropOnce(!eyedropOnce);
  };

  function usePreviousColor() {
    // TODO: Fix this.
    if (previousColor) {
      const colorToSave = targetColor;
      setTargetColor(previousColor);
      setPreviousColor(colorToSave);
    }
  }

  useEffect(() => {
    if (loadedMegaColors.length === 0) {
      // eslint-disable-next-line promise/prefer-await-to-then
      getDefaultColors().then((defaultMegaColors: MegaColor[]) => {
        setLoadedMegaColors(defaultMegaColors);
      });
    }

    return () => {
      // console.log('cleanup');
    };
  }, [loadedMegaColors, setLoadedMegaColors]);

  useEffect(() => {
    setMegaColorsFilteredByBookNames(getMegaColorsFilteredByBookNames(loadedMegaColors, selectedBookNames));
    return () => {
      // console.log('cleanup');
    };
  }, [loadedMegaColors, selectedBookNames]);

  useEffect(() => {
    console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });
    const targetColorDetailsObject = getColorDetailsObject(targetColor);
    console.log({ targetColorDetailsObject });
    const degreeTolerance = (360 / 100) * debouncedToleranceH;
    const [hueMin, hueMax] = getHueTolerance(targetColorDetailsObject.hue(), degreeTolerance);
    const filteredColors = getFilteredColors(targetColorDetailsObject, megaColorsFilteredByBookNames, hueMin, hueMax, debouncedToleranceS, debouncedToleranceL);
    // console.log({ filteredColors });
    setResults(filteredColors);
    return () => {
      // console.log('cleanup');
    };
  }, [targetColor, megaColorsFilteredByBookNames, debouncedToleranceH, debouncedToleranceS, debouncedToleranceL]); // Only re-run the effect if a value changes.

  useEffect(() => {
    const foundTargetMegaColor = getMegaColorFromCode(targetColor, megaColorsFilteredByBookNames);
    console.log({ foundTargetMegaColor });
    setTargetMegaColor(foundTargetMegaColor ?? null);
    return () => {
      // console.log('cleanup');
    };
  }, [targetColor, megaColorsFilteredByBookNames]); // Only re-run the effect if a value changes.

  return (
    <ClientOnly>
      <Layout>
        <h1 className={styles.title}>paint_color_gallery using colornerd</h1>

        <ColorLibraryFileChooser {...{ setLoadedMegaColors }} />
        <SelectBookNames {...{ loadedMegaColors, selectedBookNames, setSelectedBookNames }} />
        <Sliders {...{ setToleranceH, setToleranceL, setToleranceS, toleranceH, toleranceL, toleranceS }} />
        <UploadAndDisplayImage maxWidth={'600px'} />
        <div className="eyedrop-wrapper">
          <EyeDropper once={eyedropOnce} onChange={onChangeEyedropperColor}>
            Pick Color
          </EyeDropper>

          <p>Once: {eyedropOnce.toString()}</p>
          <button onClick={toggleOnce}>Toggle `once` prop</button>
          <button onClick={usePreviousColor}>Use previous color</button>
        </div>
        <div style={{ backgroundColor: targetColor, marginTop: '1rem', padding: '1rem' }}>
          {targetMegaColor && <ColorCell key={`${targetMegaColor.book}_${targetMegaColor.code}`} megaColor={targetMegaColor} />}
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
