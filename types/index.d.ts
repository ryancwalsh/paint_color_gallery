export type BookFileDetailObject = {
  title: string;
  filename: string;
};

export type ColorNerdRecord = {
  name: string;
  label: string;
  color: string; // TODO: Use the commented out code below to allow 'color' or 'hex' property.
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

export type ColorLibObject = typeof colorLib;

export type MegaColor = {
  colorLibObject?: ColorLibObject;
  book?: string;
} & ColorNerdRecord;

export type Cluster = {
  leadColor: ColorLibObject;
  colors: MegaColor[];
};
