export type FontSize = "lg" | "xl";

type FontSizeDictionary = {
  [k in FontSize]: string;
};

const fontSizes: FontSizeDictionary = {
  lg: "25px",
  xl: "50px",
};

export { fontSizes };
