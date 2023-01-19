import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const h4: ICommand = {
  name: "title4",
  keyCommand: "title4",
  buttonProps: { "aria-label": "Insert title4" },
  icon: (
    <Box hover={["hover:bg-grey-600"]} className="text-lg w-6 h-6">
      H4
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `#### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `#### `;
    }
    api.replaceSelection(modifyText);
  },
};

export default h4;
