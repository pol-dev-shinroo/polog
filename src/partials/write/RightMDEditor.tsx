import { Flex } from "src/elements";
import MDEditor from "@uiw/react-md-editor";
import { useMDEditor, useHeight } from "src/hooks";

const RightMDEditor = () => {
  const { MDTexts } = useMDEditor();
  const { height } = useHeight();
  return (
    <div data-color-mode="dark" className="">
      <Flex className="w-full ">
        <MDEditor.Markdown
          source={MDTexts}
          className="w-full h-full p-16 overflow-y-scroll"
          style={{ height: height - 198 }}
        />
      </Flex>
    </div>
  );
};

export default RightMDEditor;
