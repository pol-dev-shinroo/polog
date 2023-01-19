import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const h2: ICommand = {
  name: "title2",
  keyCommand: "title2",
  buttonProps: { "aria-label": "Insert title2" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg w-6 h-6">
      H2
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `## ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `## `;
    }
    api.replaceSelection(modifyText);
  },
};

export default h2;
