import { atom } from "recoil";

export const darkAtom = atom({
  key: "DARK_ATOM", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
