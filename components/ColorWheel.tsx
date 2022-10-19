// https://github.com/uiwjs/react-color/tree/main/packages/color-wheel

/* eslint-disable canonical/filename-match-exported */
import { HsvaColor, ColorResult, validHex, hexToHsva, hsvaToHex, color as handleColor } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import React from 'react';

import { getWheelHandlePosition, getWheelValueFromInput } from '../helpers/colorWheel';

import { Pointer, PointerProps } from './Pointer';

export interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  prefixCls?: string;
  color?: string | HsvaColor;
  width?: number;
  height?: number;
  radius?: React.CSSProperties['borderRadius'];
  /**
   * Starting angle of the color wheel's hue gradient, measured in degrees.
   */
  angle?: number;
  /**
   * Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise`
   */
  direction?: 'clockwise' | 'anticlockwise';
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}

const HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
const HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';

const Wheel = React.forwardRef<HTMLDivElement, WheelProps>((props, ref) => {
  const {
    prefixCls = 'w-color-wheel',
    radius = 0,
    pointer,
    className,
    style,
    width = 200,
    height = 200,
    direction = 'anticlockwise',
    angle = 180,
    color,
    onChange,
    ...other
  } = props;
  const hsva = (typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {}) as HsvaColor;
  const hex = color ? hsvaToHex(hsva) : '';
  const positions = getWheelHandlePosition({ width }, hsva);
  const comProps = {
    color: hex,
    left: '0',
    top: '0',
  };
  const handleChange = (interaction: Interaction, event: MouseEvent | TouchEvent) => {
    const result = getWheelValueFromInput({ width }, width - interaction.x, height - interaction.y);
    const handleHsva = {
      a: hsva.a,
      h: result.h,
      s: result.s,
      v: hsva.v,
    };
    onChange && onChange(handleColor(handleHsva));
  };

  return (
    <Interactive
      className={[prefixCls, className || ''].filter(Boolean).join(' ')}
      {...other}
      style={{
        ...style,
        height,
        position: 'relative',
        width,
      }}
      ref={ref}
      onMove={handleChange}
      onDown={handleChange}
    >
      {React.createElement(pointer || Pointer, {
        prefixCls,
        style: {
          transform: `translate(${positions.x}px, ${positions.y}px)`,
          zIndex: 1,
        },
        ...comProps,
      })}
      <div
        style={{
          background: direction === 'anticlockwise' ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE,
          borderRadius: '50%',
          inset: 0,
          position: 'absolute',
          transform: `rotateZ(${angle + 90}deg)`,
        }}
      />
      <div
        style={{
          background: 'radial-gradient(circle closest-side, white, transparent)',
          borderRadius: '50%',
          inset: 0,
          position: 'absolute',
        }}
      />
      <div
        style={{
          backgroundColor: 'black',
          borderRadius: '50%',
          inset: 0,
          opacity: typeof hsva.v === 'number' ? 1 - hsva.v / 100 : 0,
          position: 'absolute',
        }}
      />
    </Interactive>
  );
});

Wheel.displayName = 'Wheel';

export default Wheel;
