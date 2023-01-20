import { Flex } from "src/elements";
import { RightHeadingPreview } from "src/partials/write";
import { useToggleWrite } from "src/hooks";
import { RightMDEditor } from "src/partials/write";

const RightBox = () => {
  const { toggleAI } = useToggleWrite();

  if (!toggleAI) {
    return (
      <Flex
        justify="between"
        direction="col"
        className="w-1/2"
        style={{ backgroundColor: "#0d1117" }}
      >
        {/* heading textarea */}
        <RightHeadingPreview />
        {/* WYGIWYS preview */}
        <RightMDEditor />
      </Flex>
    );
  } else {
    return null;
  }
};

export default RightBox;
