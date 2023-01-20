import { Flex } from "src/elements";
import {
  LeftHeadingTextArea,
  LeftTagNames,
  LeftMDEditor,
  // LeftButtons,
} from "src/partials/write";

const LeftBox = () => {
  return (
    <Flex direction="col" className="w-1/2">
      {/* heading textarea */}
      <LeftHeadingTextArea />
      {/* keywords textarea */}
      <LeftTagNames />
      {/* WYGIWYS textarea */}
      <LeftMDEditor />
      {/* bottom buttons */}
      {/* <LeftButtons /> */}
    </Flex>
  );
};

export default LeftBox;
