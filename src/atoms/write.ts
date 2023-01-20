import { atom } from "recoil";

/** main textarea */
export const writeAtom = atom({
  key: "WRITE_ATOM",
  default: "" as string,
});

/**heading */
export const writeHeadingAtom = atom({
  key: "WRITE_HEADING",
  default: "" as string,
});

/**keywords */
export const writeKeywordsAtom = atom({
  key: "WRITE_KEYWORDS",
  default: "" as string,
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

/**toggle for openAI at least once */
export const ToggleOpenAIAtleastOneAtom = atom({
  key: "TOGGLE_OPEN_AT_LEAST_ONCE",
  default: false as boolean,
});

/**openAI chat arrays */
export const OpenAIChatArrAtom = atom({
  key: "OPEN_AI_CHAT_ARR",
  default: [] as string[],
});
