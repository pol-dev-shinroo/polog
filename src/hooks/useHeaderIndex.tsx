import { useRecoilState } from "recoil";
import { menuAtom } from "src/atoms/menu";
import { THeaderIndex } from "src/models";

const useMenuIndex = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<THeaderIndex>(menuAtom);

  const handleActiveIndex = (target: THeaderIndex) => {
    setActiveIndex(target);
  };

  return { activeIndex, handleActiveIndex };
};

export default useMenuIndex;
