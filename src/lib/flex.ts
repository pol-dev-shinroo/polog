import { Justify, Align, Direction } from "../types/flex";

interface IJustifySwitch {
  (direction?: Justify): string;
}
interface IAlignSwitch {
  (direction?: Align): string;
}
interface IDirectionSwitch {
  (direction?: Direction): string;
}

interface IFlexParam {
  $justify?: Justify;
  $align?: Align;
  $direction?: Direction;
}

const justifySwitch: IJustifySwitch = (justify) => {
  switch (justify) {
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    default:
      return "justify-center";
  }
};
const alignSwitch: IAlignSwitch = (align) => {
  switch (align) {
    case "start":
      return "items-start";
    case "end":
      return "items-end";
    case "center":
      return "items-center";
    default:
      return "items-center";
  }
};
const directionSwitch: IDirectionSwitch = (direction) => {
  switch (direction) {
    case "row":
      return "flex-row";
    case "column":
      return "flex-col";
    default:
      return "flex-row";
  }
};

const flex = ({
  $justify = "center",
  $align = "center",
  $direction = "row",
}: IFlexParam) => {
  return `
  flex
  ${justifySwitch($justify)}
  ${alignSwitch($align)}
  ${directionSwitch($direction)}
  `;
};

export default flex;
