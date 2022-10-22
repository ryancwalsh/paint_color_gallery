// https://github.com/uiwjs/react-color/tree/main/packages/color-wheel/src

/* eslint-disable no-param-reassign */
import { type HsvColor } from '@uiw/color-convert';

import { type WheelProps } from '../components/ColorWheel';

const TAU = Math.PI * 2;

/**
 * javascript's modulo operator doesn't produce positive numbers with negative input
 * https://www.geeksforgeeks.org/how-to-get-negative-result-using-modulo-operator-in-javascript/
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export const mod = (a: number, number: number) => ((a % number) + number) % number;

/**
 * distance between points (x, y) and (0, 0)
 */
const distribution = (x: number, y: number) => Math.sqrt(x * x + y * y);

/**
 * Get the point as the center of the wheel
 */
export function getWheelDimensions({ width = 0 }: Partial<WheelProps>) {
  const radius = width / 2;
  return {
    cx: radius,
    cy: radius,
    radius,
    width,
  };
}

/**
 * Returns true if point (x, y) lands inside the wheel
 */
export function isInputInsideWheel(props: Partial<WheelProps>, x: number, y: number) {
  const { cx, cy, width } = getWheelDimensions(props);
  const radius = width / 2;
  return distribution(cx - x, cy - y) < radius;
}

/**
 * Get the current handle position for a given color
 */
export function getWheelHandlePosition(props: Partial<WheelProps>, hsv: HsvColor) {
  const { cx, cy } = getWheelDimensions(props);
  const handleRange = getHandleRange(props);
  const handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  const handleDistribution = (hsv.s / 100) * handleRange;
  const direction = 1;
  return {
    x: cx + handleDistribution * Math.cos(handleAngle) * direction,
    y: cy + handleDistribution * Math.sin(handleAngle) * direction,
  };
}

/**
 * Get Range
 */
export function getHandleRange({ width = 0 }: Partial<WheelProps>) {
  return width / 2;
}

/**
 * Translate an angle according to wheelAngle and wheelDirection
 */
export function translateWheelAngle(props: Partial<WheelProps>, angle: number, invert?: boolean) {
  const wheelAngle = props.angle ?? 0;
  const direction = 'clockwise';
  // inverted and clockwisee
  if (invert && direction === 'clockwise') angle = wheelAngle + angle;
  // clockwise (input handling)
  else if (direction === 'clockwise') angle = 360 - wheelAngle + angle;
  // inverted and anticlockwise
  else if (invert && direction === 'anticlockwise') angle = wheelAngle + 180 - angle;
  // anticlockwise (input handling)
  else if (direction === 'anticlockwise') angle = wheelAngle - angle;
  return mod(angle, 360);
}

/**
 * Get the current wheel value from user input
 *
 * @param props - wheel props
 * @param x - global input x position
 * @param y - global input y position
 */
export function getWheelValueFromInput(props: Partial<WheelProps>, x: number, y: number) {
  const { cx, cy } = getWheelDimensions(props);
  const handleRange = getHandleRange(props);
  x = cx - x;
  y = cy - y;
  // Calculate the hue by converting the angle to radians
  const hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU));
  // Find the point's distance from the center of the wheel
  // This is used to show the saturation level
  const handleDistribution = Math.min(distribution(x, y), handleRange);
  return {
    // eslint-disable-next-line id-length
    h: Math.round(hue),
    // eslint-disable-next-line id-length
    s: Math.round((100 / handleRange) * handleDistribution),
  };
}
