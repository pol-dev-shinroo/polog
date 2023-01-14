import { useRecoilState } from "recoil";
import { subMenuAtom } from "src/atoms/menu";
import { TIndex } from "src/models";

const useSubIndex = () => {
  const [subActiveIndex, setSubActiveIndex] =
    useRecoilState<TIndex>(subMenuAtom);

  const handleSubActiveIndex = (target: TIndex) => {
    setSubActiveIndex(target);
  };

  return { subActiveIndex, handleSubActiveIndex };
};

export default useSubIndex;
