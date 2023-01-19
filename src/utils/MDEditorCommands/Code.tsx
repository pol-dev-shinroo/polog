import { TextState, TextAreaTextApi, ICommand } from "@uiw/react-md-editor";
import { Box } from "src/elements";

const code: ICommand = {
  name: "code",
  keyCommand: "code",
  buttonProps: { "aria-label": "Insert code" },
  icon: (
    <Box
      hover={["hover:bg-grey-600"]}
      className="text-lg w-5 h-5 font-mono pt-0.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    </Box>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `\`\`\`${state.selectedText}\n\`\`\``;
    if (!state.selectedText) {
      modifyText = `\`\`\`code here\n\`\`\` `;
    }
    api.replaceSelection(modifyText);
  },
};

export default code;
