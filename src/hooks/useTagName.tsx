import { useState } from "react";
import { useRecoilState } from "recoil";
import { writeTagNameAtom } from "src/atoms/write";

const useTagName = () => {
  const [writeTagNames, setWriteTagNames] = useRecoilState(writeTagNameAtom);

  const [newTags, setNewTags] = useState("");

  const handleWriteNewTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (writeTagNames.length < 11) {
      setNewTags(value);
    } else {
      alert("max tag no:10");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const isTagExist = writeTagNames.find((tag) => tag === newTags);
      if (!isTagExist && newTags.length !== 0 && writeTagNames.length < 11) {
        setWriteTagNames([...writeTagNames, newTags]);
        setNewTags("");
      }
    }
  };

  const handleDelete = (target: string) => {
    setWriteTagNames((prev) => {
      return prev.filter((item) => {
        return item !== target;
      });
    });
  };

  return {
    writeTagNames,
    newTags,
    handleWriteNewTags,
    handleKeyPress,
    handleDelete,
  };
};

export default useTagName;
