import { Flex } from "src/elements";
import { WriteHeaderTextArea } from "src/components";
import { useTextArea } from "src/hooks";

const LeftHeadingTextArea = () => {
  const { handleHeading, writeHeading } = useTextArea();
  return (
    <Flex className="w-full border-8 border-blue-700">
      <WriteHeaderTextArea
        onChange={handleHeading}
        value={writeHeading}
        maxRows={4}
        placeholder="Write Title here..."
        className="w-full text-4xl font-bold bg-gray-900 text-slate-50 "
      ></WriteHeaderTextArea>
    </Flex>
  );
};

export default LeftHeadingTextArea;
