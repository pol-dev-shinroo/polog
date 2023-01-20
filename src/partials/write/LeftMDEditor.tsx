import MDEditor, { commands } from "@uiw/react-md-editor";
import {
  h1,
  h2,
  h3,
  h4,
  bold,
  italic,
  underLine,
  link,
  quote,
  code,
  image,
} from "src/utils/MDEditorCommands";
import { Box } from "src/elements";
import { useMDEditor } from "src/hooks";

const LeftMDEditor = () => {
  const { MDTexts, handleMDChange } = useMDEditor();

  return (
    <Box className="w-full">
      <div data-color-mode="dark">
        <MDEditor
          value={MDTexts}
          onChange={handleMDChange}
          preview="edit"
          commands={[
            h1,
            h2,
            h3,
            h4,
            commands.divider,
            bold,
            italic,
            underLine,
            commands.divider,
            link,
            quote,
            code,
            image,
          ]}
          height={window.innerHeight - 64 - 64 - 65}
          extraCommands={[]}
          visibleDragbar={false}
        />
      </div>
    </Box>
  );
};

export default LeftMDEditor;
