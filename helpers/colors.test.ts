import { getHueTolerance, isWithinCircularTolerance } from './colors';

describe('colors', () => {
  test('getHueTolerance', () => {
    expect(getHueTolerance(355, 1)).toStrictEqual([354, 356]);
    expect(getHueTolerance(355, 10)).toStrictEqual([345, 5]);

    expect(getHueTolerance(9, 3)).toStrictEqual([6, 12]);
    expect(getHueTolerance(9, 10)).toStrictEqual([359, 19]);
  });

  test('isWithinCircularTolerance', () => {
    // min <= max
    expect(isWithinCircularTolerance(15, 10, 20)).toBe(true);
    expect(isWithinCircularTolerance(21, 10, 20)).toBe(false);

    // min > max
    expect(isWithinCircularTolerance(355, 345, 5)).toBe(true);
    expect(isWithinCircularTolerance(4, 345, 5)).toBe(true);
    expect(isWithinCircularTolerance(354, 345, 5)).toBe(true);
    expect(isWithinCircularTolerance(6, 345, 5)).toBe(false);
    expect(isWithinCircularTolerance(344, 345, 5)).toBe(false);
  });
});
