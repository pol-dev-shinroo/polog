import { Flex, FramerBtn } from "src/elements";
import { useRouter } from "src/hooks";

const Header = () => {
  const { handleNavigate } = useRouter();
  return (
    <Flex className="w-full h-16 bg-gray-800">
      <Flex className="pl-10">
        <FramerBtn
          onClick={() => handleNavigate("/")}
          className="text-lg rounded-lg hover:font-bold text-slate-50"
        >
          👈 Back
        </FramerBtn>
      </Flex>
    </Flex>
  );
};

export default Header;
