import { from } from 'better-color-tools'; // https://github.com/drwpow/better-color-tools
import React from 'react';

function isValid(code: string): boolean {
  try {
    // eslint-disable-next-line no-unused-vars
    const betterColor = from(code);
    return true;
  } catch {
    return false;
  }
}

export default function TextInputs({ targetColor, setTargetColor }: { targetColor: any; setTargetColor: any }): JSX.Element {
  const betterColor = from(targetColor);

  function onChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    if (isValid(attemptedCode)) {
      setTargetColor(attemptedCode);
    }
  }

  function onChangeOklch(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    if (isValid(attemptedCode)) {
      setTargetColor(from(attemptedCode).hex);
    }
  }

  function onChangeRgb(event: React.ChangeEvent<HTMLInputElement>) {
    const attemptedCode = event.currentTarget.value;
    if (isValid(attemptedCode)) {
      setTargetColor(from(attemptedCode).hex);
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
