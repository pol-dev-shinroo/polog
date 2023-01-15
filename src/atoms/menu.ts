import { atom } from "recoil";
import { THeaderIndex, TSubHeaderIndex } from "src/models";

export const menuAtom = atom<THeaderIndex>({
  key: "MENU_ATOM",
  default: 1,
});

export const subMenuAtom = atom<TSubHeaderIndex>({
  key: "SUB_MENU_ATOM",
  default: 0,
});
