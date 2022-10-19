import { useState } from 'react';

import { MegaColor } from '../types';

export default function ColorCell({ megaColor, isSelectedColor }: { megaColor: MegaColor; isSelectedColor?: boolean }): JSX.Element {
  // console.log({ megaColor });
  const { colorDetailsObject } = megaColor;

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  function toggleIsFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  return (
    <div style={{ background: colorDetailsObject.hsl() }} data-json={JSON.stringify(megaColor)} className={isFullscreen ? 'fullscreen colorCell' : 'colorCell'}>
      {isSelectedColor && (
        <div className="toggleIsFullscreen" onClick={() => toggleIsFullscreen()} style={{ cursor: 'pointer', float: 'right' }}>
          ⤢
        </div>
      )}
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
