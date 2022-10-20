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

  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (color: ColorResult) => void;
}

const Wheel = React.forwardRef<HTMLDivElement, WheelProps>((props, ref) => {
  const { prefixCls = 'w-color-wheel', pointer, className, style, width = 200, height = 200, angle = 180, color, onChange, ...other } = props;
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
          background:
            'conic-gradient(hsl(0deg 100% 50%), hsl(10deg 100% 50%), hsl(20deg 100% 50%), hsl(30deg 100% 50%), hsl(40deg 100% 50%), hsl(50deg 100% 50%), hsl(60deg 100% 50%), hsl(70deg 100% 50%), hsl(80deg 100% 50%), hsl(90deg 100% 50%), hsl(100deg 100% 50%), hsl(110deg 100% 50%), hsl(120deg 100% 50%), hsl(130deg 100% 50%), hsl(140deg 100% 50%), hsl(150deg 100% 50%), hsl(160deg 100% 50%), hsl(170deg 100% 50%), hsl(180deg 100% 50%), hsl(190deg 100% 50%), hsl(200deg 100% 50%), hsl(210deg 100% 50%), hsl(220deg 100% 50%), hsl(230deg 100% 50%), hsl(240deg 100% 50%), hsl(250deg 100% 50%), hsl(260deg 100% 50%), hsl(270deg 100% 50%), hsl(280deg 100% 50%), hsl(290deg 100% 50%), hsl(300deg 100% 50%), hsl(310deg 100% 50%), hsl(320deg 100% 50%), hsl(330deg 100% 50%), hsl(340deg 100% 50%), hsl(350deg 100% 50%))',
          backgroundBlendMode: 'hue', // Tells the browser to use the hue values from this gradient. https://stackoverflow.com/a/74133683/
          borderRadius: '50%',
          inset: 0,
          position: 'absolute',
          transform: `rotateZ(${angle + 90}deg)`,
        }}
      />
      <div
        style={{
          background: 'radial-gradient(white, black)',
          borderRadius: '50%',
          inset: 0,
          mixBlendMode: 'luminosity', // Tells the browser to use the luminosity values from this gradient. https://stackoverflow.com/a/74133683/
          position: 'absolute',
        }}
      />
      {/* <div
        style={{
          background: `radial-gradient(circle closest-side, hsl(0deg 0% 100% / 100%),
hsl(0deg 0% 100% / 100%),
hsl(0deg 0% 100% / 100%),
hsl(0deg 0% 95% / 90%),
hsl(0deg 0% 90% / 80%),
hsl(0deg 0% 85% / 70%),
hsl(0deg 0% 80% / 60%),
hsl(0deg 0% 75% / 50%),
hsl(0deg 0% 70% / 40%),
hsl(0deg 0% 65% / 30%),
hsl(0deg 0% 60% / 20%),
hsl(0deg 0% 55% / 10%),
hsl(0deg 0% 50% / 0%),
hsl(0deg 0% 45% / 10%),
hsl(0deg 0% 40% / 20%),
hsl(0deg 0% 35% / 30%),
hsl(0deg 0% 30% / 40%),
hsl(0deg 0% 25% / 50%),
hsl(0deg 0% 20% / 60%),
hsl(0deg 0% 15% / 70%),
hsl(0deg 0% 10% / 80%),
hsl(0deg 0% 5% / 90%),
hsl(0deg 0% 1% / 100%)), conic-gradient(hsl(0deg 100% 50%), hsl(10deg 100% 50%), hsl(20deg 100% 50%), hsl(30deg 100% 50%), hsl(40deg 100% 50%), hsl(50deg 100% 50%), hsl(60deg 100% 50%), hsl(70deg 100% 50%), hsl(80deg 100% 50%), hsl(90deg 100% 50%), hsl(100deg 100% 50%), hsl(110deg 100% 50%), hsl(120deg 100% 50%), hsl(130deg 100% 50%), hsl(140deg 100% 50%), hsl(150deg 100% 50%), hsl(160deg 100% 50%), hsl(170deg 100% 50%), hsl(180deg 100% 50%), hsl(190deg 100% 50%), hsl(200deg 100% 50%), hsl(210deg 100% 50%), hsl(220deg 100% 50%), hsl(230deg 100% 50%), hsl(240deg 100% 50%), hsl(250deg 100% 50%), hsl(260deg 100% 50%), hsl(270deg 100% 50%), hsl(280deg 100% 50%), hsl(290deg 100% 50%), hsl(300deg 100% 50%), hsl(310deg 100% 50%), hsl(320deg 100% 50%), hsl(330deg 100% 50%), hsl(340deg 100% 50%), hsl(350deg 100% 50%))`,
          borderRadius: '50%',
          inset: 0,
          position: 'absolute',
          transform: `rotateZ(${angle + 90}deg)`,
        }}
      /> */}
      {/* <div
        style={{
          background:
            'radial-gradient(circle closest-side, hsl(0deg 0% 100% / 100%), hsl(0deg 0% 100% / 50%), hsl(0deg 0% 100% / 0%), hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 100%))',
          borderRadius: '50%',
          inset: 0,
          position: 'absolute',
        }}
      /> */}
      {/* <div
        style={{
          backgroundColor: 'black',
          borderRadius: '50%',
          inset: 0,
          opacity: typeof hsva.v === 'number' ? 1 - hsva.v / 100 : 0,
          position: 'absolute',
        }}
      /> */}
    </Interactive>
  );
});

Wheel.displayName = 'Wheel';

export default Wheel;
