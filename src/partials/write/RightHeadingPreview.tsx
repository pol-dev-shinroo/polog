import { Flex } from "src/elements";
import { WriteHeaderTextArea } from "src/components";
import { useTextArea } from "src/hooks";

const RightHeadingPreview = () => {
  const { writeHeading } = useTextArea();
  return (
    <Flex className="w-full max-h-fit p-7">
      <WriteHeaderTextArea
        readOnly={true}
        value={writeHeading}
        maxRows={3}
        className="w-full h-full text-4xl font-bold bg-gray-900 text-slate-50  "
      ></WriteHeaderTextArea>
    </Flex>
  );
};

export default RightHeadingPreview;
