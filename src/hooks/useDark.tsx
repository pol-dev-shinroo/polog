import { useRecoilState } from "recoil";
import { darkAtom } from "src/atoms/dark";

const useDark = () => {
  const [isDark, setIsDark] = useRecoilState<boolean>(darkAtom);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };
  return { isDark, toggleDark };
};

export default useDark;
