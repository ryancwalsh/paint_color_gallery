export type ColorObject = any;
export type ColorLibObject = typeof colorLib;
export type MegaColor = {
  colorObject: ColorObject;
  colorLibObject: ColorLibObject;
};
export type Cluster = {
  name: string;
  leadColor: ColorLibObject;
  colors: MegaColor[];
};
