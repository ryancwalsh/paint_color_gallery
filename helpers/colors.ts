// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colorLib from 'color'; // https://github.com/Qix-/color
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Cluster, ColorLibObject, ColorObject, MegaColor } from '../types';

export function getColorLibObject(colorObject: ColorObject): ColorLibObject {
  let colorLibObject;
  try {
    colorLibObject = colorLib(colorObject.hex);
  } catch (error) {
    console.error({ error, colorObject });
  }
  return colorLibObject;
}

const lightnessClusters: Cluster[] = [
  { name: 'dark', leadColor: colorLib('hsl(0, 0%, 0%, 1)'), colors: [] },
  { name: 'medium', leadColor: colorLib('hsl(0, 0%, 50%, 1)'), colors: [] },
  { name: 'light', leadColor: colorLib('hsl(0, 0%, 100%, 1)'), colors: [] },
];

function colorDistance(a: ColorLibObject, b: ColorLibObject): number {
  const x = (a.hue() - b.hue()) ** 2 + (a.saturationl() - b.saturationl()) ** 2 + (a.lightness() - b.lightness()) ** 2;
  return Math.sqrt(x);
}

function getSortValue(color: ColorLibObject): number {
  return color.lightness() * 5 + color.saturationl() * 2 + color.hue();
}

function sortArray(array: ColorObject[]) {
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

    lightnessClusters.forEach((cluster, clusterIndex) => {
      const distance = colorDistance(megaColor.colorLibObject, cluster.leadColor);
      if (typeof minDistance === 'undefined' || minDistance > distance) {
        minDistance = distance;
        minDistanceClusterIndex = clusterIndex;
      }
    });

    lightnessClusters[minDistanceClusterIndex].colors.push(megaColor);
  });

  lightnessClusters.forEach((cluster) => {
    const { colors } = cluster;
    sortArray(colors);
    // eslint-disable-next-line no-param-reassign
    cluster.colors = colors;
  });

  return lightnessClusters;
}
