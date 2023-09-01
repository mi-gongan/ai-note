export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export enum SpacingDirection {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}
