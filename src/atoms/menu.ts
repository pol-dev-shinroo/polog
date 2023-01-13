import { atom } from "recoil";

export const menuAtom = atom({
  key: "MENU_ATOM", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
