import { useRecoilState } from "recoil";
import { subMenuAtom } from "src/atoms/menu";
import { TSubHeaderIndex } from "src/models";

const useSubHeaderIndex = () => {
  const [subActiveIndex, setSubActiveIndex] =
    useRecoilState<TSubHeaderIndex>(subMenuAtom);

  const handleSubActiveIndex = (target: TSubHeaderIndex) => {
    setSubActiveIndex(target);
  };

  return { subActiveIndex, handleSubActiveIndex };
};

export default useSubHeaderIndex;
