import { useState, useEffect } from "react";

const useNoLineBreaker = (value: string) => {
  const [regexedText, setRegexedText] = useState("");

  useEffect(() => {
    setRegexedText(value.replace(/\n/g, " ").trim());
  }, [value]);
  return { regexedText };
};

export default useNoLineBreaker;
