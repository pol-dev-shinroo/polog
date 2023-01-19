import { Flex, FramerBtn } from "src/elements";
import { useRouter, useToggleWrite } from "src/hooks";

const Header = () => {
  const { handleNavigate } = useRouter();
  const { handleToggleAI } = useToggleWrite();
  return (
    <Flex justify="between" className="w-full h-16 bg-gray-800">
      <Flex className="pl-5">
        <FramerBtn
          onClick={() => handleNavigate("/")}
          className="text-lg rounded-lg hover:font-bold text-slate-50"
        >
          👈 Back
        </FramerBtn>
      </Flex>
      <Flex className="pr-5">
        <FramerBtn
          onClick={handleToggleAI}
          className="text-lg rounded-lg hover:font-bold text-slate-50"
        >
          🤖 OpenAI
        </FramerBtn>
      </Flex>
    </Flex>
  );
};

export default Header;
