import { from } from 'better-color-tools'; // https://github.com/drwpow/better-color-tools
import React from 'react';

import { getColorDetailsObjectIfValid } from '../helpers/colors';

export default function TextInputs({ targetColor, setTargetColor }: { targetColor: any; setTargetColor: any }): JSX.Element {
  const betterColor = from(targetColor);

  function onChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    const colorDetailsObject = getColorDetailsObjectIfValid(attemptedCode);
    if (colorDetailsObject) {
      setTargetColor(colorDetailsObject.hex);
    }
  }

  function onChangeOklch(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    const colorDetailsObject = getColorDetailsObjectIfValid(attemptedCode);
    if (colorDetailsObject) {
      setTargetColor(colorDetailsObject.hex);
    }
  }

  function onChangeRgb(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    const colorDetailsObject = getColorDetailsObjectIfValid(attemptedCode);
    if (colorDetailsObject) {
      setTargetColor(colorDetailsObject.hex);
    }
  }

  return (
    <div>
      <div>
        <input value={betterColor.hex} onChange={onChangeHex} />
      </div>
      <div>
        <input value={betterColor.oklch} onChange={onChangeOklch} />
      </div>
      <div>
        <input value={betterColor.rgb} onChange={onChangeRgb} />
      </div>
    </div>
  );
}
