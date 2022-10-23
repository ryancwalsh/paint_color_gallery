import { from } from 'better-color-tools';

// eslint-disable-next-line import/extensions, import/no-unresolved
import { type ColorDetailsObject, type ColorNerdRecord, type MegaColor } from '../types';

export const defaultColorsJson = 'https://raw.githubusercontent.com/ryancwalsh/paint_color_gallery/main/data/colornerd.json';

export function getColorDetailsObjectIfValid(code: string): ColorDetailsObject | null {
  let betterColor = null;
  try {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    betterColor = from(code);
  } catch (error) {
    console.error(error);
  }

  return betterColor;
}

export function getColorDetailsObject(color: string): ColorDetailsObject {
  return from(color);
}

export function getColorDetailsObjectFromColorNerdRecord(colorNerdRecord: ColorNerdRecord): ColorDetailsObject {
  let colorDetailsObject;
  try {
    colorDetailsObject = from(colorNerdRecord.code);
  } catch (error) {
    console.error({ colorNerdRecord, error });
  }

  return colorDetailsObject;
}

function getCircularWrappedValue(value: number): number {
  // console.log({ value });
  if (value < 360) {
    if (value >= 0) {
      return value;
    } else {
      return value + 360;
    }
  } else {
    return value - 360;
  }
}

export function getHueTolerance(hue: number, degreeTolerance: number): [number, number] {
  // console.log({ hue, hue, percentageTolerance, degreeTolerance });
  const hueMin = getCircularWrappedValue(hue - degreeTolerance);
  const hueMax = getCircularWrappedValue(hue + degreeTolerance);
  // const hueMin = Math.min(boundA, boundB);
  // const hueMax = Math.max(boundA, boundB);
  console.log({ degreeTolerance, hueMax, hueMin });
  return [hueMin, hueMax];
}

export function isWithinCircularTolerance(value: number, min: number, max: number): boolean {
  if (min <= max) {
    return value >= min && value <= max;
  } else {
    const isWithinLowerRange = value >= 0 && value <= max;
    const isWithinUpperRange = value >= min && value < 360;
    // console.log({ isWithinLowerRange, isWithinUpperRange, value });
    return isWithinLowerRange || isWithinUpperRange;
  }
}

function isWithinTolerance(value: number, targetValue: number, percentageTolerance: number): boolean {
  // console.log({ percentageTolerance, targetValue, value });
  const min = targetValue - percentageTolerance / 100; // It is ok to go below 0 because no results will have <0 anyway.
  const max = targetValue + percentageTolerance / 100; // It is ok to go over 100 because no results will have >100 anyway.
  console.log({ max, min, percentageTolerance, targetValue, value });
  return value >= min && value <= max;
}

export function getFilteredColors(targetColorDetailsObject: ColorDetailsObject, megaColors: MegaColor[], toleranceL: number, toleranceC: number, toleranceH: number): MegaColor[] {
  // console.log({ targetColorLibObject });
  const results: MegaColor[] = [];
  const keys = new Set<string>();
  const [targetLightness, targetChroma, targetHue] = targetColorDetailsObject.oklchVal;
  const degreeTolerance = (360 / 100) * toleranceH;
  const [hueMin, hueMax] = getHueTolerance(targetHue, degreeTolerance);
  for (const megaColor of megaColors) {
    const megaColorDetailsObject = getColorDetailsObject(megaColor.code);
    // console.log({ megaColorDetailsObject });
    const [lightness, chroma, hue] = megaColorDetailsObject.oklchVal;

    if (isWithinCircularTolerance(hue, hueMin, hueMax) && isWithinTolerance(chroma, targetChroma, toleranceC) && isWithinTolerance(lightness, targetLightness, toleranceL)) {
      const newRecord = { ...megaColor, colorDetailsObject: megaColorDetailsObject };
      // console.log({ newRecord });

      const key = `${newRecord.name}-${newRecord.code}`;
      // console.log({ key, entry });
      if (!keys.has(key)) {
        results.push(newRecord);
        keys.add(key);
      }
    }
  }

  return results;
}

export function getBookNames(megaColors: MegaColor[]): Set<string> {
  const bookNames = new Set<string>();
  for (const megaColor of megaColors) {
    bookNames.add(megaColor.book);
  }

  return bookNames;
}

export function getMegaColorsFilteredByBookNames(megaColors: MegaColor[], bookNames: string[]): MegaColor[] {
  return megaColors.filter((megaColor) => bookNames.length === 0 || bookNames.includes(megaColor.book));
}

export async function getDefaultColors(): Promise<MegaColor[]> {
  const response = await fetch(defaultColorsJson);
  const json = await response.json();
  // console.log({ json });
  return json;
}

export function getMegaColorFromCode(colorCode: string, megaColorsFilteredByBookNames: MegaColor[]): MegaColor | undefined {
  const item = megaColorsFilteredByBookNames.find((megaColor) => megaColor.code === colorCode);
  const result = item ? { ...item, colorDetailsObject: getColorDetailsObject(colorCode) } : undefined;
  console.log('getMegaColorFromName', { colorCode, result });
  return result;
}

export function getOklch(code: string): string {
  const betterColor = from(code);
  // eslint-disable-next-line prefer-const
  let [lightness, chroma, hue] = betterColor.oklchVal;
  lightness *= 100;
  chroma *= 100;
  return [lightness, chroma, hue].map((value: number) => value.toFixed(1)).join(', ');
}
