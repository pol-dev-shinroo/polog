import { Flex } from "src/elements";
import { RightHeadingPreview } from "src/partials/write";
import MDEditor from "@uiw/react-md-editor";
import { useMDEditor, useToggleWrite } from "src/hooks";

const RightBox = () => {
  const { MDTexts } = useMDEditor();
  const { toggleAI } = useToggleWrite();

  if (!toggleAI) {
    return (
      <Flex direction="col" className="w-1/2  border-8 border-purple-700">
        {/* heading textarea */}
        <RightHeadingPreview />
        {/* WYGIWYS preview */}
        <div data-color-mode="dark" className=" border-8 border-purple-700">
          <Flex className="w-full ">
            <MDEditor.Markdown
              source={MDTexts}
              className="w-full  p-16 overflow-y-scroll"
            />
          </Flex>
        </div>
      </Flex>
    );
  } else {
    return null;
  }
};

export default RightBox;
