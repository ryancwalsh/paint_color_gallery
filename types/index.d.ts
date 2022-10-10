export type BookFileDetailObject = {
  filename: string;
  title: string;
};

export type ColorNerdRecord = {
  code: string;
  hex?: string; // TODO: See the commented out code below to allow 'color' or 'hex' property. Figure out how to support ColorNerd using 'hex' property.
  label: string;
  name: string;
};

// type Only<T, U> = {
//   [P in keyof T]: T[P];
// } & {
//   [P in keyof U]?: never;
// };

// type Either<T, U> = Only<T, U> | Only<U, T>; // https://stackoverflow.com/a/66605669/470749

// export type BookFileDetailObject = {
//   title: string;
//   filename: string;
// };

// interface ColorNerdRecordBasics {
//   name: string;
//   label: string;
// }

// interface ColorNerdRecordWithHex extends ColorNerdRecordBasics {
//   hex: string;
// }

// interface ColorNerdRecordWithColor extends ColorNerdRecordBasics {
//   color: string;
// }

// export type ColorNerdRecord = Either<ColorNerdRecordWithHex, ColorNerdRecordWithColor>;

export type ColorDetailsObject = any; // `typeof colorLib`, where colorLib is whatever is exported from the 'color' dependency. https://github.com/Qix-/color

export type MegaColor = ColorNerdRecord & {
  book?: string;
  colorDetailsObject?: ColorDetailsObject;
};

export type Cluster = {
  colors: MegaColor[];
  leadColor: ColorDetailsObject;
};
