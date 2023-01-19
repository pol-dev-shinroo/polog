import { useRecoilState } from "recoil";
import {
  writeAtom,
  writeHeadingAtom,
  writeKeywordsAtom,
} from "src/atoms/write";

const useTextArea = () => {
  /**main textarea */
  const [textArea, setTextArea] = useRecoilState(writeAtom);
  /**heading */
  const [writeHeading, setWriteHeading] = useRecoilState(writeHeadingAtom);
  /**keywords */
  const [writeKeywords, setWriteKeywords] = useRecoilState(writeKeywordsAtom);

  // functions
  const handleHeading = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target as HTMLTextAreaElement;
    if (writeHeading.length < 180) {
      setWriteHeading(value);
    }
  };

  return { textArea, writeHeading, writeKeywords, handleHeading };
};

export default useTextArea;
