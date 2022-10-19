import React, { useMemo } from 'react';

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  top?: string;
  left: string;
  color?: string;
}

const BOXSHADOW = 'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px';

export const Pointer = ({ className, color, left, top, style, prefixCls }: PointerProps): JSX.Element => {
  const styleWarp: React.CSSProperties = {
    ...style,
    left,
    position: 'absolute',
    top,
  };
  return useMemo(
    () => (
      <div className={`${prefixCls}-pointer ${className || ''}`} style={styleWarp}>
        <div
          className={`${prefixCls}-fill`}
          style={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: BOXSHADOW,
            height: 10,
            transform: 'translate(-5px, -5px)',
            width: 10,
          }}
        >
          <div
            style={{
              backgroundColor: color,
              borderRadius: '50%',
              inset: 0,
              position: 'absolute',
            }}
          />
        </div>
      </div>
    ),
    [top, left, color, className, prefixCls],
  );
};
