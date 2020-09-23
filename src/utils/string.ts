export const trimStr = (s: string, len: number): string => s.slice(0, len);

export const addEllispis = (s: string, len: number): string => {
  if (s.length < len) return s;

  const trimmedStr = trimStr(s, len);
  return trimmedStr + "...";
};
