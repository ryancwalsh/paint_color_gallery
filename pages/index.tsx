/* eslint-disable canonical/filename-match-exported */

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useEyeDrop, EyeDropper, OnChangeEyedrop } from 'react-eyedrop';
import { useDebounce, useLocalStorage } from 'usehooks-ts';

import ClientOnly from '../components/ClientOnly';
import ColorCell from '../components/ColorCell';
import ColorLibraryFileChooser from '../components/ColorLibraryFileChooser';
import History from '../components/History';
import Layout from '../components/Layout';
import SelectBookNames from '../components/SelectBookNames';
import Sliders from '../components/Sliders';
import TaskList from '../components/TaskList';
import TextInputs from '../components/TextInputs';
import UploadAndDisplayImage from '../components/UploadAndDisplayImage';
import { getFilteredColors, getHueTolerance, getColorDetailsObject, getMegaColorsFilteredByBookNames, getMegaColorFromCode } from '../helpers/colors';
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

  const [colorHistory, setColorHistory] = useLocalStorage<string[]>('colorHistory', []);

  const debouncedToleranceH = useDebounce<number>(toleranceH, 200);
  const debouncedToleranceS = useDebounce<number>(toleranceS, 200);
  const debouncedToleranceL = useDebounce<number>(toleranceL, 200);
  // console.log({ debouncedToleranceH, debouncedToleranceL, debouncedToleranceS });

  const [colors, pickColor, cancelPickColor] = useEyeDrop({
    once: eyedropOnce,
  });

  function selectColor(colorCode: string) {
    const mostRecent = colorHistory.length > 0 ? colorHistory[0] : null;
    const foundTargetMegaColor = getMegaColorFromCode(targetColor, megaColorsFilteredByBookNames);
    setTargetColor(colorCode);
    if (foundTargetMegaColor && colorCode !== mostRecent) {
      setColorHistory((existingItems) => {
        const result = [colorCode, ...existingItems];
        console.log('setColorHistory', JSON.stringify(result));
        return result;
      });
    }
  }

  const onChangeEyedropperColor = ({ hex }: OnChangeEyedrop) => {
    selectColor(hex);
  };

  const toggleOnce = () => {
    setEyedropOnce(!eyedropOnce);
  };

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
      <Layout {...{ backgroundColor: targetColor }}>
        <TextInputs {...{ setTargetColor, targetColor }} />
        <Sliders {...{ setToleranceH, setToleranceL, setToleranceS, toleranceH, toleranceL, toleranceS }} />

        <History {...{ colorHistory, megaColorsFilteredByBookNames, selectColor }} />
        <div style={{ marginTop: '1rem', padding: '1rem' }}>
          {targetMegaColor && <ColorCell key={`${targetMegaColor.book}_${targetMegaColor.code}`} megaColor={targetMegaColor} isSelectedColor={true} selectColor={selectColor} />}
          <div className="colors">
            {results.map((colorInMap: MegaColor) => (
              <ColorCell key={`${colorInMap.book}_${colorInMap.code}`} megaColor={colorInMap} selectColor={selectColor} />
            ))}
          </div>
        </div>
        <TaskList />
        <UploadAndDisplayImage maxWidth={'600px'} />
        <div className="eyedrop-wrapper">
          <EyeDropper once={eyedropOnce} onChange={onChangeEyedropperColor}>
            Pick Color
          </EyeDropper>

          <p>Once: {eyedropOnce.toString()}</p>
          <button onClick={toggleOnce}>Toggle `once` prop</button>
        </div>
        <ColorLibraryFileChooser {...{ loadedMegaColors, setLoadedMegaColors }} />
        <SelectBookNames {...{ loadedMegaColors, selectedBookNames, setSelectedBookNames }} />
      </Layout>
    </ClientOnly>
  );
};

export default Home;
