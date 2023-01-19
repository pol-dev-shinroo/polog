import { atom } from "recoil";

/** main textarea */
export const writeAtom = atom({
  key: "WRITE_ATOM",
  default: "",
});

/**heading */
export const writeHeadingAtom = atom({
  key: "WRITE_HEADING",
  default: "",
});

/**keywords */
export const writeKeywordsAtom = atom({
  key: "WRITE_KEYWORDS",
  default: "",
});
