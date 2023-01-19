import { Flex, FramerBtn } from "src/elements";
import {
  LeftHeadingTextArea,
  LeftTagNames,
  LeftMDEditor,
} from "src/partials/write";

const LeftBox = () => {
  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      {/* heading textarea */}
      <LeftHeadingTextArea />
      {/* keywords textarea */}
      <LeftTagNames />
      {/* WYGIWYS textarea */}
      <LeftMDEditor />
      {/* bottom buttons */}
      <Flex
        justify="end"
        className="w-full h-full bg-gray-800 border-8 border-blue-700"
      >
        <FramerBtn
          onClick={() => {}}
          className="w-1/6 h-full border text-lg hover:font-bold text-slate-50"
        >
          <Flex align="center" justify="center" className="w-full h-full">
            Save
          </Flex>
        </FramerBtn>
        <FramerBtn
          onClick={() => {}}
          className="w-1/6 h-full border text-lg hover:font-bold text-slate-50"
        >
          <Flex align="center" justify="center" className="w-full h-full">
            Post
          </Flex>
        </FramerBtn>
      </Flex>
    </Flex>
  );
};

export default LeftBox;
