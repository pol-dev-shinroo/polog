import { TGrid } from "src/models";

interface IGrid {
  (lg?: TGrid, md?: TGrid, sm?: TGrid): string;
}

const grid: IGrid = (lg, md, sm) => {
  let newClasses = "";
  if (lg) {
    newClasses += lg + " ";
  }
  if (md) {
    newClasses += md + " ";
  }
  if (sm) {
    newClasses += sm + " ";
  }

  return newClasses;
};

export default grid;
