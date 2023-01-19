import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const quote: ICommand = {
  name: "quote",
  keyCommand: "quote",
  buttonProps: { "aria-label": "add quotes" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg w-4 h-4 font-mono">
      "
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `> ${state.selectedText}`;
    if (!state.selectedText) {
      modifyText = `> `;
    }
    api.replaceSelection(modifyText);
  },
};

export default quote;
