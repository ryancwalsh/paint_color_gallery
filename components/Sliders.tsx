export default function Sliders({ toleranceH, setToleranceH, toleranceS, setToleranceS, toleranceL, setToleranceL }: any): JSX.Element {
  return (
    <div>
      <label>
        <input type="range" defaultValue={toleranceH} onChange={(event) => setToleranceH(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceH}
      </label>
      <label>
        <input type="range" defaultValue={toleranceS} onChange={(event) => setToleranceS(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceS}
      </label>
      <label>
        <input type="range" defaultValue={toleranceL} onChange={(event) => setToleranceL(Number(event.target.value))} min="0" max="50" step="1" />
        {toleranceL}
      </label>
    </div>
  );
}
