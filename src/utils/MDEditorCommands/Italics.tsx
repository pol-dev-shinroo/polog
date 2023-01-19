import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const italic: ICommand = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: { "aria-label": "make text italic" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg italic font-serif">
      I
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `*${state.selectedText}*`;
    if (!state.selectedText) {
      modifyText = `* `;
    }
    api.replaceSelection(modifyText);
  },
};

export default italic;
