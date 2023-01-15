import { AnimatePresence } from "framer-motion";
import { useMenuIndex, useSubHeaderIndex } from "src/hooks";
import { Grid, Box } from "src/elements";
import { Post } from "src/components";
import {
  postArrMock1,
  postArrMock2,
  postArrMock3,
  postArrMock4,
  postArrMock5,
} from "src/utils/postMock";

const Posts = () => {
  const { activeIndex } = useMenuIndex();
  const { subActiveIndex, handleSubActiveIndex } = useSubHeaderIndex();
  return (
    <Box className="z-0">
      <AnimatePresence>
        <Grid
          sm="sm:grid-cols-1"
          md="md:grid-cols-2"
          lg="lg:grid-cols-3"
          positionClasses="relative"
          className="p-3 px-3 pt-10 columns grid grid-cols-3 grid-row-gap-0 gap-8"
          framerInitial={{ y: 10, opacity: 0 }}
          framerAnimate={{ y: 0, opacity: 1 }}
          framerExit={{ y: -10, opacity: 0 }}
          framertransition={{ duration: 0.5 }}
        >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </AnimatePresence>
    </Box>
  );
};

export default Posts;
