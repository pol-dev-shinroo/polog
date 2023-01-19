import { useRecoilState } from "recoil";
import { ToggleOpenAIAtom } from "src/atoms/write";

/** toggle Preview/ Open AI */
const useToggleWrite = () => {
  const [toggleAI, setToggleAI] = useRecoilState(ToggleOpenAIAtom);

  const handleToggleAI = () => {
    setToggleAI((prev) => !prev);
  };

  return { toggleAI, handleToggleAI };
};

export default useToggleWrite;
