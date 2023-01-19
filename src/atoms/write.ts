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

/**tagName */
export const writeTagNameAtom = atom({
  key: "WRITE_TAG_NAME",
  default: [] as string[],
});

/**MDEditor */
export const MDTextsAtom = atom({
  key: "WRITE_MDE",
  default: "" as string | undefined,
});

/**toggle for openAI */
export const ToggleOpenAIAtom = atom({
  key: "TOGGLE_OPEN",
  default: false as boolean,
});
