import { Flex } from "src/elements";

import { Header, LeftBox, RightBox, OpenAI } from "src/layout/write";

const WriteFinal = () => {
  return (
    // whole screen
    <Flex direction="col" className="w-full h-scren">
      <Header />
      {/* body */}
      <Flex direction="row" className="w-full bg-gray-900">
        <LeftBox />
        <RightBox />
        <OpenAI />
      </Flex>
    </Flex>
  );
};

export default WriteFinal;
