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
      style={{ background: colorDetailsObject.hsl() }}
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
      <div className="book" style={{ fontSize: '0.8rem' }}>
        {megaColor.book}
      </div>
      {/* <div className="hsl" style={{ fontSize: '0.7rem' }}>
        {megaColor.colorDetailsObject
          .hsl()
          .color.map((value: number) => value.toFixed(1))
          .join(', ')}
      </div> */}
      <div className="oklch" style={{ fontSize: '0.7rem' }}>
        {getOklch(colorDetailsObject.hsl().string())}
      </div>
    </div>
  );
}
