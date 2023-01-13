import { useRecoilState } from "recoil";
import { menuAtom } from "src/atoms/menu";
import { TIndex } from "src/models";

const useIndex = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<TIndex>(menuAtom);

  const handleActiveIndex = (target: TIndex) => {
    setActiveIndex(target);
  };

  return { activeIndex, handleActiveIndex };
};

export default useIndex;
