import { AnimatePresence } from "framer-motion";
import { Grid, Box } from "src/elements";
import { Post } from "src/components";

const Posts = () => {
  return (
    <Box className="z-0">
      <AnimatePresence>
        <Grid
          sm="sm:grid-cols-1"
          md="md:grid-cols-2"
          lg="lg:grid-cols-3"
          positionClasses="relative"
          className="p-3 px-3 pt-10 columns grid grid-cols-3 grid-row-gap-0 gap-8"
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
