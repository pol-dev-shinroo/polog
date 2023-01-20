import { useRecoilState } from "recoil";
import { ToggleOpenAIAtom, ToggleOpenAIAtleastOneAtom } from "src/atoms/write";

/** toggle Preview/ Open AI */
const useToggleWrite = () => {
  const [toggleAI, setToggleAI] = useRecoilState(ToggleOpenAIAtom);
  const [toggleAtLeastOnce, setToggleAtLeastOnce] = useRecoilState(
    ToggleOpenAIAtleastOneAtom
  );
  const handleToggleAI = () => {
    setToggleAI((prev) => !prev);
  };

  return { toggleAI, handleToggleAI, toggleAtLeastOnce, setToggleAtLeastOnce };
};

export default useToggleWrite;
