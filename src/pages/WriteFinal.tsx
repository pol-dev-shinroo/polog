import { Flex } from "src/elements";

import { Header, LeftBox, RightBox } from "src/layout/write";

const WriteFinal = () => {
  return (
    // whole screen
    <Flex direction="col" className="w-full h-screen border-8 border-red-700">
      <Header />
      {/* body */}
      <Flex direction="row" className="w-full h-full border-8 border-green-700">
        <LeftBox />
        <RightBox />
      </Flex>
    </Flex>
  );
};

export default WriteFinal;
