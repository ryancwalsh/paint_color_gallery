// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import colorLib from 'color'; // https://github.com/Qix-/color

// eslint-disable-next-line import/extensions, import/no-unresolved
import { type Cluster, type ColorLibObject as ColorLibraryObject, type ColorNerdRecord, type MegaColor } from '../types';

const numberClusters = 20;

export function getColorLibObject(color: string): ColorLibraryObject {
  return colorLib(color);
}

export function getColorLibObjectFromColorNerdRecord(colorObject: ColorNerdRecord): ColorLibraryObject {
  let colorLibraryObject;
  try {
    colorLibraryObject = colorLib(colorObject.color);
  } catch (error) {
    console.error({ colorObject, error });
  }

  return colorLibraryObject;
}

const clusters: Cluster[] = [];

for (let index = 0; index < numberClusters; index += 1) {
  const hue = index * (360 / numberClusters);
  clusters.push({
    colors: [],
    leadColor: colorLib(`hsl(${hue}, 0%, 0%, 1)`),
  });
}

function isHueWithinTolerance(hue: number, hueToMatch: number, percentageTolerance: number): boolean {
  // TODO: Does this properly handle hue wrap-around?
  const degreeTolerance = (360 / 100) * percentageTolerance;
  // console.log({ hue, hueToMatch, percentageTolerance, degreeTolerance });
  const hueToMatchMin = hueToMatch - degreeTolerance;
  const hueToMatchMax = hueToMatch + degreeTolerance;
  return hue >= hueToMatchMin && hue <= hueToMatchMax;
}

function isSaturationWithinTolerance(saturation: number, saturationToMatch: number, percentageTolerance: number): boolean {
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const min = saturationToMatch - percentageTolerance; // It is ok to go below 0 because no results will have <0 anyway.
  const max = saturationToMatch + percentageTolerance; // It is ok to go over 100 because no results will have >100 anyway.
  return saturation >= min && saturation <= max;
}

function isLightnessWithinTolerance(lightness: number, lightnessToMatch: number, percentageTolerance: number): boolean {
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const min = lightnessToMatch - percentageTolerance; // It is ok to go below 0 because no results will have <0 anyway.
  const max = lightnessToMatch + percentageTolerance; // It is ok to go over 100 because no results will have >100 anyway.
  return lightness >= min && lightness <= max;
}

export function getFilteredColors(color: string, megaColors: MegaColor[], toleranceH: number, toleranceS: number, toleranceL: number): MegaColor[] {
  const targetColorLibraryObject = getColorLibObject(color);
  // console.log({ targetColorLibObject });
  const results: MegaColor[] = [];
  for (const megaColor of megaColors) {
    const megaColorLibraryObject = getColorLibObject(megaColor.color);
    // console.log({ megaColorLibObject });
    if (
      isHueWithinTolerance(megaColorLibraryObject.hue(), targetColorLibraryObject.hue(), toleranceH) &&
      isSaturationWithinTolerance(megaColorLibraryObject.saturationl(), targetColorLibraryObject.saturationl(), toleranceS) &&
      isLightnessWithinTolerance(megaColorLibraryObject.lightness(), targetColorLibraryObject.lightness(), toleranceL)
    ) {
      const newRecord = { ...megaColor, colorLibObject: megaColorLibraryObject };
      // console.log({ newRecord });
      results.push(newRecord);
    }
  }

  return results;
}
