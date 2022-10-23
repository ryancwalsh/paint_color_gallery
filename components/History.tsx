import { getMegaColorFromCode, getOklch } from '../helpers/colors';
import { MegaColor } from '../types';

function HistoryColorCell({
  colorCode,
  megaColorsFilteredByBookNames,
  selectColor,
}: {
  colorCode: string;
  megaColorsFilteredByBookNames: MegaColor[];
  selectColor: any;
}): JSX.Element {
  const megaColor = getMegaColorFromCode(colorCode, megaColorsFilteredByBookNames);
  return (
    <div
      className="historyColorCell"
      data-color-code={colorCode}
      onClick={() => {
        selectColor(colorCode);
      }}
      style={{ backgroundColor: colorCode, padding: '3px' }}
    >
      <span className="colorName">{megaColor?.name}</span>
      <span className="oklch" style={{ float: 'right', fontSize: '0.7rem' }}>
        {getOklch(colorCode)}
      </span>
    </div>
  );
}

export default function History({
  colorHistory,
  megaColorsFilteredByBookNames,
  selectColor,
}: {
  colorHistory: string[];
  megaColorsFilteredByBookNames: MegaColor[];
  selectColor: any;
}): JSX.Element {
  return (
    <div className="colorHistory card">
      History:
      {colorHistory.map((colorCode, index) => (
        <HistoryColorCell key={`${index}_${colorCode}`} {...{ colorCode, megaColorsFilteredByBookNames, selectColor }} />
      ))}
    </div>
  );
}
