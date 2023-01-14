import { AnimatePresence } from "framer-motion";
import { useIndex, useSubIndex } from "src/hooks";
import { Framer } from "src/elements";

const Post = () => {
  const { activeIndex } = useIndex();
  const { subActiveIndex, handleSubActiveIndex } = useSubIndex();
  return (
    <AnimatePresence>
      <Framer className="bg-red-400 rounded-md w-24 min-w-full"></Framer>
    </AnimatePresence>
  );
};

export default Post;
