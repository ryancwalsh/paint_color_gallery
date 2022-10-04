// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colorLib from 'color'; // https://github.com/Qix-/color
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Cluster, ColorLibObject, ColorNerdRecord, MegaColor } from '../types';

const numClusters = 20;

export function getColorLibObject(color: string): ColorLibObject {
  return colorLib(color);
}

export function getColorLibObjectFromColorNerdRecord(colorObject: ColorNerdRecord): ColorLibObject {
  let colorLibObject;
  try {
    colorLibObject = colorLib(colorObject.color);
  } catch (error) {
    console.error({ error, colorObject });
  }
  return colorLibObject;
}

const clusters: Cluster[] = [];

for (let i = 0; i < numClusters; i += 1) {
  const hue = i * (360 / numClusters);
  clusters.push({
    colors: [],
    leadColor: colorLib(`hsl(${hue}, 0%, 0%, 1)`),
  });
}

function colorDistance(a: ColorLibObject, b: ColorLibObject): number {
  const x = (a.hue() - b.hue()) ** 2 + (a.saturationl() - b.saturationl()) ** 2 + (a.lightness() - b.lightness()) ** 2;
  return Math.sqrt(x);
}

function getSortValue(color: ColorLibObject): number {
  return color.lightness() * 5 + color.saturationl() * 2 + color.hue();
}

function sortArray(array: MegaColor[]) {
  // https://stackoverflow.com/a/54383087/470749 and I should consider https://tomekdev.com/posts/sorting-colors-in-js too
  array.sort((elem1, elem2) => {
    // const value1 = elem1.colorLibObject.hue();
    // const value2 = elem2.colorLibObject.hue();
    // const colorToCompareTo = colorLib('#000000');
    // const value1 = colorDistance(elem1.colorLibObject, colorToCompareTo);
    // const value2 = colorDistance(elem2.colorLibObject, colorToCompareTo);
    const value1 = getSortValue(elem1.colorLibObject);
    const value2 = getSortValue(elem2.colorLibObject);

    if (value1 > value2) return 1;
    else if (value1 < value2) return -1;
    else return 0;
  });
}

export function sortWithClusters(colorsToSort: MegaColor[]) {
  // See https://tomekdev.com/posts/sorting-colors-in-js and https://codepen.io/tniezurawski/pen/zYZQRvG?editors=0010
  colorsToSort.forEach((megaColor: MegaColor) => {
    let minDistance: number;
    let minDistanceClusterIndex = 0;

    clusters.forEach((cluster, clusterIndex) => {
      const distance = colorDistance(megaColor.colorLibObject, cluster.leadColor);
      if (typeof minDistance === 'undefined' || minDistance > distance) {
        minDistance = distance;
        minDistanceClusterIndex = clusterIndex;
      }
    });

    clusters[minDistanceClusterIndex].colors.push(megaColor);
  });

  clusters.forEach((cluster) => {
    const { colors } = cluster;
    sortArray(colors);
    // eslint-disable-next-line no-param-reassign
    cluster.colors = colors;
  });

  return clusters;
}

function isHueWithinTolerance(hue: number, hueToMatch: number, percentageTolerance: number): boolean {
  // TODO: Does this properly handle hue wrap-around?
  // console.log({ hue, hueToMatch, percentageTolerance });
  const hueToMatchMin = hueToMatch - hueToMatch * percentageTolerance;
  const hueToMatchMax = hueToMatch + hueToMatch * percentageTolerance;
  return hue >= hueToMatchMin && hue <= hueToMatchMax;
}

function isSaturationWithinTolerance(saturation: number, saturationToMatch: number, percentageTolerance: number): boolean {
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const percentageToleranceWholeNumber = 100 * percentageTolerance;
  const min = saturationToMatch - percentageToleranceWholeNumber; // It is ok to go below 0 because no results will have <0 anyway.
  const max = saturationToMatch + percentageToleranceWholeNumber; // It is ok to go over 100 because no results will have >100 anyway.
  return saturation >= min && saturation <= max;
}

function isLightnessWithinTolerance(lightness: number, lightnessToMatch: number, percentageTolerance: number): boolean {
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const percentageToleranceWholeNumber = 100 * percentageTolerance;
  const min = lightnessToMatch - percentageToleranceWholeNumber; // It is ok to go below 0 because no results will have <0 anyway.
  const max = lightnessToMatch + percentageToleranceWholeNumber; // It is ok to go over 100 because no results will have >100 anyway.
  return lightness >= min && lightness <= max;
}

export function getFilteredColors(color: string, megaColors: MegaColor[], toleranceH: number, toleranceS: number, toleranceL: number): MegaColor[] {
  const targetColorLibObject = getColorLibObject(color);
  console.log({ targetColorLibObject });
  const results: MegaColor[] = [];
  for (let i = 0; i < megaColors.length; i += 1) {
    const megaColor = megaColors[i];
    const megaColorLibObject = getColorLibObject(megaColor.color);
    // console.log({ megaColorLibObject });
    if (
      isHueWithinTolerance(megaColorLibObject.hue(), targetColorLibObject.hue(), toleranceH) &&
      isSaturationWithinTolerance(megaColorLibObject.saturationl(), targetColorLibObject.saturationl(), toleranceS) &&
      isLightnessWithinTolerance(megaColorLibObject.lightness(), targetColorLibObject.lightness(), toleranceL)
    ) {
      const newRecord = { ...megaColor, colorLibObject: megaColorLibObject };
      // console.log({ newRecord });
      results.push(newRecord);
    }
  }
  return results;
}
