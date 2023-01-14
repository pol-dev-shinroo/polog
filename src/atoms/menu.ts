import { atom } from "recoil";

export const menuAtom = atom({
  key: "MENU_ATOM",
  default: 1,
});

export const subMenuAtom = atom({
  key: "SUB_MENU_ATOM",
  default: 0,
});
