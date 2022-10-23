export default function Sliders({
  toleranceH,
  setToleranceH,
  toleranceC,
  setToleranceC,
  toleranceL,
  setToleranceL,
}: {
  toleranceH: any;
  setToleranceH: any;
  toleranceC: any;
  setToleranceC: any;
  toleranceL: any;
  setToleranceL: any;
}): JSX.Element {
  return (
    <div className="sliders card">
      Tolerances:
      <label>
        <div className="label">Lightness:</div>
        <div className="flex">
          <span className="currentValue">{toleranceL}%</span>
          <input type="range" defaultValue={toleranceL} onChange={(event) => setToleranceL(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
      <label>
        <div className="label">Chroma:</div>
        <div className="flex">
          <span className="currentValue">{toleranceC}%</span>
          <input type="range" defaultValue={toleranceC} onChange={(event) => setToleranceC(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
      <label>
        <div className="label">Hue:</div>
        <div className="flex">
          <span className="currentValue">{toleranceH}%</span>
          <input type="range" defaultValue={toleranceH} onChange={(event) => setToleranceH(Number(event.target.value))} min="0" max="50" step="1" />
        </div>
      </label>
    </div>
  );
}
