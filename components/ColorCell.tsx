import { MegaColor } from '../types';

export default function ColorCell({ megaColor }: { megaColor: MegaColor }): JSX.Element {
  // console.log({ megaColor });
  const { colorDetailsObject } = megaColor;

  return (
    <div
      style={{ background: colorDetailsObject.hsl(), display: 'inline-block', height: '150px', margin: '2px', padding: '0.5rem', width: '150px' }}
      data-json={JSON.stringify(megaColor)}
    >
      <div className="colorName">{megaColor.name}</div>
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {megaColor.book}
      </div>
      <div className="hsl" style={{ fontSize: '0.7rem' }}>
        {megaColor.colorDetailsObject
          .hsl()
          .color.map((value: number) => value.toFixed(1))
          .join(', ')}
      </div>
    </div>
  );
}
