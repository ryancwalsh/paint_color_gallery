export type BookFileDetailObject = {
  title: string;
  filename: string;
};

export type ColorNerdRecord = {
  name: string;
  label: string;
  hex: string;
};

export type ColorLibObject = typeof colorLib;

export type MegaColor = {
  colorLibObject?: ColorLibObject;
  book?: string;
} & ColorNerdRecord;

export type Cluster = {
  leadColor: ColorLibObject;
  colors: MegaColor[];
};
