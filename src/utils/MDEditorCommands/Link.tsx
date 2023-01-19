import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const link: ICommand = {
  name: "link",
  keyCommand: "link",
  buttonProps: { "aria-label": "add quotes" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg line-through">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `[${state.selectedText}](link)`;
    if (!state.selectedText) {
      modifyText = `[Text](Link)`;
    }
    api.replaceSelection(modifyText);
  },
};

export default link;
