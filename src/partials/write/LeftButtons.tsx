import { Flex, FramerBtn } from "src/elements";
const LeftButtons = () => {
  return (
    <Flex justify="end" className="w-full h-16 bg-gray-800">
      <FramerBtn
        onClick={() => {}}
        className="w-1/6 text-lg hover:font-bold text-slate-50"
      >
        <Flex align="center" justify="center" className="w-full ">
          Save
        </Flex>
      </FramerBtn>
      <FramerBtn
        onClick={() => {}}
        className="w-1/6  text-lg hover:font-bold text-slate-50"
      >
        <Flex align="center" justify="center" className="w-full ">
          Post
        </Flex>
      </FramerBtn>
    </Flex>
  );
};

export default LeftButtons;
