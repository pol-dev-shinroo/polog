import { useState } from "react";

const useDark = (defaultValue: boolean) => {
  const [isDark, setIsDark] = useState<boolean>(defaultValue);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };
  return { isDark, toggleDark };
};

export default useDark;
