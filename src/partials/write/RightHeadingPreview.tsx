import { Flex } from "src/elements";
import { WriteHeaderTextArea } from "src/components";
import { useTextArea } from "src/hooks";

const RightHeadingPreview = () => {
  const { writeHeading } = useTextArea();
  return (
    <Flex
      className="w-full max-h-fit p-12"
      style={{ backgroundColor: "#0d1117" }}
    >
      <WriteHeaderTextArea
        readOnly={true}
        value={writeHeading}
        maxRows={3}
        className="w-full h-full text-4xl font-bold text-slate-50 "
        style={{ backgroundColor: "#0d1117" }}
      ></WriteHeaderTextArea>
    </Flex>
  );
};

export default RightHeadingPreview;
