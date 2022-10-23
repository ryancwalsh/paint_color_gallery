import { from } from 'better-color-tools';
import { useEffect, useState } from 'react';

import TextInputs from './TextInputs';

export default function ColorInputs({ setTargetColor, targetColor }: { setTargetColor: any; targetColor: any }): JSX.Element {
  const betterColor = from(targetColor);
  const [originalLightness, originalChroma, originalHue] = betterColor.oklchVal;
  const [lightness, setLightness] = useState<number>(originalLightness);
  const [chroma, setChroma] = useState<number>(originalChroma);
  const [hue, setHue] = useState<number>(originalHue);

  useEffect(() => {
    const updatedColor = from(`oklch(${lightness * 100}% ${chroma} ${hue})`);
    setTargetColor(updatedColor.hex);
    return () => {
      // console.log('cleanup');
    };
  }, [lightness, chroma, hue, setTargetColor]); // Only re-run the effect if a value changes.

  return (
    <div className="card">
      Choose color:
      <TextInputs {...{ setTargetColor, targetColor }} />
      <label>
        <div className="label">Lightness:</div>
        <div className="flex">
          <span className="currentValue">{(lightness * 100).toFixed(1)}%</span>
          <input type="range" defaultValue={lightness} onChange={(event) => setLightness(Number(event.target.value))} min="0" max="1" step="0.01" />
        </div>
      </label>
      <label>
        <div className="label">Chroma:</div>
        <div className="flex">
          <span className="currentValue">{(chroma * 100).toFixed(1)}%</span>
          <input type="range" defaultValue={chroma} onChange={(event) => setChroma(Number(event.target.value))} min="0" max="1" step="0.01" />
        </div>
      </label>
      <label>
        <div className="label">Hue:</div>
        <div className="flex">
          <span className="currentValue" title="out of 360 degrees">
            {hue.toFixed(1)}
          </span>
          <input type="range" defaultValue={hue} onChange={(event) => setHue(Number(event.target.value))} min="0" max="360" step="0.1" />
        </div>
      </label>
    </div>
  );
}
