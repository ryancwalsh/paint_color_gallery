import { useState } from 'react';

import { getOklch } from '../helpers/colors';
import { MegaColor } from '../types';

export default function ColorCell({ megaColor, isSelectedColor, selectColor }: { megaColor: MegaColor; isSelectedColor?: boolean; selectColor: any }): JSX.Element {
  // console.log({ megaColor });
  const { colorDetailsObject } = megaColor;

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  function toggleIsFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  return (
    <div
      style={{ background: colorDetailsObject.hex }}
      data-json={JSON.stringify(megaColor)}
      className={isFullscreen ? 'fullscreen colorCell' : 'colorCell'}
      onClick={() => {
        selectColor(megaColor.code);
      }}
    >
      {isSelectedColor && (
        <div className="toggleIsFullscreen" onClick={() => toggleIsFullscreen()} style={{ cursor: 'pointer', float: 'right' }}>
          ⤢
        </div>
      )}
      <div className="colorName">{megaColor.name}</div>
      <a className="book" style={{ fontSize: '0.8rem' }} target="_blank" href={`https://duckduckgo.com?q=inurl:"${megaColor.book} ${megaColor.name}"`} rel="noreferrer">
        {megaColor.book}
      </a>
      {/* <div className="hsl" style={{ fontSize: '0.7rem' }}>
        {megaColor.colorDetailsObject
          .hsl()
          .color.map((value: number) => value.toFixed(1))
          .join(', ')}
      </div> */}
      <div className="oklch" style={{ fontSize: '0.7rem' }}>
        {getOklch(colorDetailsObject.hex)}
      </div>
      <div className="hex" style={{ fontSize: '0.7rem' }}>
        {colorDetailsObject.hex.toUpperCase()}
      </div>
    </div>
  );
}
