import { useState, useEffect, useRef } from "react";

const useGenerateText = (text: string, delay: number) => {
  const [currentText, setCurrentText] = useState("");
  const indexRef = useRef(0);
  const totalLength = text.length;

  useEffect(() => {
    if (text) {
      indexRef.current = 0;
      let intervalId = setTimeout(function animate() {
        const newText = currentText + text[indexRef.current];
        setCurrentText(newText);
        indexRef.current++;
        if (indexRef.current < text.length) {
          intervalId = setTimeout(animate, delay);
        }
      }, delay);
      return () => clearTimeout(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay]);

  return { currentText, indexRef, totalLength };
};

export default useGenerateText;
