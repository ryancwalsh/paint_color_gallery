export default function Sliders({ toleranceH, setToleranceH, toleranceS, setToleranceS, toleranceL, setToleranceL }: any): JSX.Element {
  return (
    <div className="sliders">
      <label>
        <div className="label">Hue:</div>
        <div className="flex">
          <span className="currentValue">{toleranceH}%</span>
          <input type="range" defaultValue={toleranceH} onChange={(event) => setToleranceH(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
      <label>
        <div className="label">Saturation:</div>
        <div className="flex">
          <span className="currentValue">{toleranceS}%</span>
          <input type="range" defaultValue={toleranceS} onChange={(event) => setToleranceS(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
      <label>
        <div className="label">Lightness:</div>
        <div className="flex">
          <span className="currentValue">{toleranceL}%</span>
          <input type="range" defaultValue={toleranceL} onChange={(event) => setToleranceL(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
    </div>
  );
}
