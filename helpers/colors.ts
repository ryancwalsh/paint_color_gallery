// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import colorLib from 'color'; // https://github.com/Qix-/color

// eslint-disable-next-line import/extensions, import/no-unresolved
import { type ColorDetailsObject, type ColorNerdRecord, type MegaColor } from '../types';

export function getColorDetailsObject(color: string): ColorDetailsObject {
  return colorLib(color);
}

export function getColorDetailsObjectFromColorNerdRecord(colorNerdRecord: ColorNerdRecord): ColorDetailsObject {
  let colorDetailsObject;
  try {
    colorDetailsObject = colorLib(colorNerdRecord.code);
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

function isWithinTolerance(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
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

function isSaturationWithinTolerance(saturation: number, saturationToMatch: number, percentageTolerance: number): boolean {
  // TODO Pull this out to index.tsx and use isWithinTolerance here in this file.
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const min = saturationToMatch - percentageTolerance; // It is ok to go below 0 because no results will have <0 anyway.
  const max = saturationToMatch + percentageTolerance; // It is ok to go over 100 because no results will have >100 anyway.
  return saturation >= min && saturation <= max;
}

function isLightnessWithinTolerance(lightness: number, lightnessToMatch: number, percentageTolerance: number): boolean {
  // TODO Pull this out to index.tsx and use isWithinTolerance here in this file.
  // console.log({ saturation, saturationToMatch, percentageTolerance });
  const min = lightnessToMatch - percentageTolerance; // It is ok to go below 0 because no results will have <0 anyway.
  const max = lightnessToMatch + percentageTolerance; // It is ok to go over 100 because no results will have >100 anyway.
  return lightness >= min && lightness <= max;
}

export function getFilteredColors(
  targetColorDetailsObject: ColorDetailsObject,
  megaColors: MegaColor[],
  hueMin: number,
  hueMax: number,
  toleranceS: number,
  toleranceL: number,
): MegaColor[] {
  // console.log({ targetColorLibObject });
  const results: MegaColor[] = [];
  const keys = new Set<string>();
  for (const megaColor of megaColors) {
    const megaColorDetailsObject = getColorDetailsObject(megaColor.code);
    // console.log({ megaColorDetailsObject });
    if (
      isWithinCircularTolerance(megaColorDetailsObject.hue(), hueMin, hueMax) &&
      isSaturationWithinTolerance(megaColorDetailsObject.saturationl(), targetColorDetailsObject.saturationl(), toleranceS) &&
      isLightnessWithinTolerance(megaColorDetailsObject.lightness(), targetColorDetailsObject.lightness(), toleranceL)
    ) {
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
