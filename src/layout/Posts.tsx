import { AnimatePresence } from "framer-motion";
import { useMenuIndex, useSubHeaderIndex } from "src/hooks";
import { Box } from "src/elements";
import {
  Community,
  HotMonth,
  HotToday,
  HotWeek,
  New,
} from "src/partials/posts";

import { postArrMock1 } from "src/utils/postMock";

const Posts = () => {
  const { activeIndex } = useMenuIndex();
  const { subActiveIndex, handleSubActiveIndex } = useSubHeaderIndex();

  return (
    <Box className="z-0">
      {activeIndex === 0 && <Community posts={postArrMock1} />}
      {activeIndex === 1 && subActiveIndex === 0 && (
        <HotMonth posts={postArrMock1} />
      )}
      {activeIndex === 1 && subActiveIndex === 1 && (
        <HotToday posts={postArrMock1} />
      )}
      {activeIndex === 1 && subActiveIndex === 2 && (
        <HotWeek posts={postArrMock1} />
      )}
      {activeIndex === 2 && <New posts={postArrMock1} />}
    </Box>
  );
};

export default Posts;
