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
import { Flex, Box } from "src/elements";
import { LeftHeadingTextArea, LeftTagNames } from "src/partials/write";
import { useMDEditor } from "src/hooks";

const LeftBox = () => {
  const { MDTexts, handleMDChange } = useMDEditor();
  console.log(MDTexts);
  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      {/* heading textarea */}
      <LeftHeadingTextArea />
      {/* keywords textarea */}
      <LeftTagNames />
      {/* WYGIWYS textarea */}
      <Box className="w-full border-8 border-purple-700">
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
            extraCommands={[]}
            visibleDragbar={false}
          />
        </div>
      </Box>
      {/* bottom buttons */}
      <Flex className="w-full border-8 border-blue-700"></Flex>
    </Flex>
  );
};

export default LeftBox;
