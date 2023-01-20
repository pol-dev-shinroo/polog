import { Flex, Input } from "src/elements";
import { useTagName } from "src/hooks";
import { TagNames } from "src/components";

const LeftTagNames = () => {
  const { writeTagNames, newTags, handleWriteNewTags, handleKeyPress } =
    useTagName();
  return (
    <Flex
      align="center"
      className="w-full  min-h-14 max-h-fit bg-gray-900 flex-wrap p-4"
    >
      {writeTagNames.map((tag, index) => (
        <TagNames tag={tag} index={index} />
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

export default LeftTagNames;
