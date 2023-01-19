import { Flex } from "src/elements";
import { RightHeadingPreview } from "src/partials/write";
import MDEditor from "@uiw/react-md-editor";
import { useMDEditor } from "src/hooks";

const RightBox = () => {
  const { MDTexts } = useMDEditor();
  return (
    <Flex direction="col" className="w-1/2 h-full border-8 border-purple-700">
      {/* heading textarea */}
      <RightHeadingPreview />
      {/* WYGIWYS preview */}
      <div data-color-mode="dark" className="h-full">
        <Flex className="w-full h-full">
          <MDEditor.Markdown
            source={MDTexts}
            className="w-full  p-20 overflow-y-scroll"
          />
        </Flex>
      </div>
    </Flex>
  );
};

export default RightBox;
