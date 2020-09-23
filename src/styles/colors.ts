export type Color = "teal200" | "teal500" | "grey300" | "grey400" | "grey600";

type ColorDictionary = {
  [k in Color]: string;
};

const colors: ColorDictionary = {
  teal200: "#eefaf2",
  teal500: "#94c81e",
  grey300: "#e8e8e8",
  grey400: "#9b9b9b",
  grey600: "#bfc1c6",
};

export { colors };
