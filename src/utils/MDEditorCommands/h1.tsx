import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const h1: ICommand = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: { "aria-label": "Insert title1" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg">
      H1
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `# ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `# `;
    }
    api.replaceSelection(modifyText);
  },
};

export default h1;
