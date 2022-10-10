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

function colorDistance(a: ColorLibraryObject, b: ColorLibraryObject): number {
  const x = (a.hue() - b.hue()) ** 2 + (a.saturationl() - b.saturationl()) ** 2 + (a.lightness() - b.lightness()) ** 2;
  return Math.sqrt(x);
}

function getSortValue(color: ColorLibraryObject): number {
  return color.lightness() * 5 + color.saturationl() * 2 + color.hue();
}

function sortArray(array: MegaColor[]) {
  // https://stackoverflow.com/a/54383087/470749 and I should consider https://tomekdev.com/posts/sorting-colors-in-js too
  array.sort((element1, element2) => {
    // const value1 = elem1.colorLibObject.hue();
    // const value2 = elem2.colorLibObject.hue();
    // const colorToCompareTo = colorLib('#000000');
    // const value1 = colorDistance(elem1.colorLibObject, colorToCompareTo);
    // const value2 = colorDistance(elem2.colorLibObject, colorToCompareTo);
    const value1 = getSortValue(element1.colorLibObject);
    const value2 = getSortValue(element2.colorLibObject);

    if (value1 > value2) return 1;
    else if (value1 < value2) return -1;
    else return 0;
  });
}

export function sortWithClusters(colorsToSort: MegaColor[]) {
  // See https://tomekdev.com/posts/sorting-colors-in-js and https://codepen.io/tniezurawski/pen/zYZQRvG?editors=0010
  for (const megaColor of colorsToSort) {
    let minDistance: number | null = null;
    let minDistanceClusterIndex = 0;

    for (const [clusterIndex, cluster] of clusters.entries()) {
      const distance = colorDistance(megaColor.colorLibObject, cluster.leadColor);
      if (minDistance === null || minDistance > distance) {
        minDistance = distance;
        minDistanceClusterIndex = clusterIndex;
      }
    }

    clusters[minDistanceClusterIndex].colors.push(megaColor);
  }

  for (const cluster of clusters) {
    const { colors } = cluster;
    sortArray(colors);
    // eslint-disable-next-line no-param-reassign
    cluster.colors = colors;
  }

  return clusters;
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
