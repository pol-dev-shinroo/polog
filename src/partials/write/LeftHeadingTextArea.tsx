import { Flex } from "src/elements";
import { WriteHeaderTextArea } from "src/components";
import { useTextArea } from "src/hooks";

const LeftHeadingTextArea = () => {
  const { handleHeading, writeHeading } = useTextArea();
  return (
    <Flex className="w-full min-h-16 max-h-fit pl-4 border-gray-500 border-r-2">
      <WriteHeaderTextArea
        onChange={handleHeading}
        value={writeHeading}
        maxRows={3}
        placeholder="Write Title here..."
        className="w-full text-4xl font-bold bg-gray-900 text-slate-50 "
      ></WriteHeaderTextArea>
    </Flex>
  );
};

export default LeftHeadingTextArea;
