import { css } from "twin.macro";
import { Align, Justify, Direction } from "src/models";

interface IFlexFramer {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
}

const alignSwitch = (align: Align) => {
  switch (align) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    default:
      return;
  }
};
const justifySwitch = (align: Justify) => {
  switch (align) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "between":
      return "space-between";
    default:
      return;
  }
};
const directionSwitch = (align: Direction) => {
  switch (align) {
    case "row":
      return "row";
    case "col":
      return "column";
    default:
      return;
  }
};

const flexFramer = ({
  justify = "center",
  align = "center",
  direction = "row",
}: IFlexFramer) => {
  return css`
    display: flex;
    align-items: ${alignSwitch(align)};
    justify-content: ${justifySwitch(justify)};
    flex-direction: ${directionSwitch(direction)};
  `;
};
export default flexFramer;
