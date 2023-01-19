import { Flex } from "src/elements";
import { RightHeadingPreview } from "src/partials/write";

const RightBox = () => {
  return (
    <Flex direction="col" className="w-1/2 border-8 border-purple-700">
      {/* heading textarea */}
      <RightHeadingPreview />
    </Flex>
  );
};

export default RightBox;
