export type Color = "teal200" | "teal500";

type ColorDictionary = {
  [k in Color]: string;
};

const colors: ColorDictionary = {
  teal200: "#eefaf2",
  teal500: "green",
};

export { colors };
