import { FramerFlex } from "src/elements";
import { useTagName } from "src/hooks";

interface ITagNames {
  tag: string;
  index: number;
}

const TagNames: React.FC<ITagNames> = ({ tag, index }) => {
  const { handleDelete } = useTagName();
  return (
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
  );
};

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

export default TagNames;
