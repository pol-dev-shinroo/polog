import { Flex, Input, FramerFlex } from "src/elements";
import { useTagName } from "src/hooks";

const LeftTagNames = () => {
  const {
    writeTagNames,
    newTags,
    handleWriteNewTags,
    handleKeyPress,
    handleDelete,
  } = useTagName();
  return (
    <Flex
      align="center"
      className="w-full bg-gray-900 flex-wrap border-8 border-yellow-700"
    >
      {writeTagNames.map((tag, index) => (
        <FramerFlex
          key={index}
          onClick={() => handleDelete(tag)}
          align="center"
          whileHover={hover}
          whileTap={tap}
          className="text-green-500 text-base border  border-slate-600 px-2 rounded-xl m-2 min-w-[2rem] cursor-pointer"
        >
          {tag}
        </FramerFlex>
      ))}
      <Input
        value={newTags}
        onChange={handleWriteNewTags}
        onKeyPress={handleKeyPress}
        placeholder="Write tags here..."
        className="text-base text-slate-50 font-bold bg-gray-900 h-7"
      />
    </Flex>
  );
};

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

export default LeftTagNames;
