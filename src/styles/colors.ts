export type Color =
  | "teal200"
  | "teal500"
  | "grey300"
  | "grey400"
  | "grey600"
  | "grey800"
  | "blue300"
  | "blue600"
  | "blue700"
  | "pink300"
  | "pink900"
  | "purple300"
  | "purple700";

type ColorDictionary = {
  [k in Color]: string;
};

const colors: ColorDictionary = {
  teal200: "#eefaf2",
  teal500: "#94c81e",
  grey300: "#e8e8e8",
  grey400: "#9b9b9b",
  grey600: "#bfc1c6",
  grey800: "#9b9ea5",
  blue300: "#dff1f8",
  blue600: "#01b5f3",
  blue700: "#6ed3f5",
  pink300: "#f7dfed",
  pink900: "#ef0189",
  purple300: "#e8e7f0",
  purple700: "#5950a6",
};

export { colors };
