import { AnimatePresence } from "framer-motion";
import { Grid } from "src/elements";
import { Post } from "src/components";
import {
  postArrMock1,
  postArrMock2,
  postArrMock3,
  postArrMock4,
  postArrMock5,
} from "src/utils/postMock";

const Posts = () => {
  return (
    <AnimatePresence>
      <Grid
        // sm="sm:grid-cols-1"
        // md="md:grid-cols-2"
        // lg="lg:grid-cols-3"
        className="p-3 px-3 pt-10 columns grid grid-cols-3 grid-row-gap-0 gap-5"
      >
        <Post />
      </Grid>
    </AnimatePresence>
  );
};

export default Posts;
