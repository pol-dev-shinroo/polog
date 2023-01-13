import { useState } from "react";
import { TIndex } from "src/models";

const useIndex = (defaultIndex: TIndex) => {
  const [activeIndex, setActiveIndex] = useState<TIndex>(defaultIndex);

  const handleActiveIndex = (target: TIndex) => {
    setActiveIndex(target);
  };

  return { activeIndex, handleActiveIndex };
};

export default useIndex;
