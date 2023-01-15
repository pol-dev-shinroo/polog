import { AnimatePresence } from "framer-motion";
import { Post } from "src/components";
import { Grid } from "src/elements";
import { TPost } from "src/models";

interface IPosts {
  posts: TPost[];
}

const HotWeek = ({ posts }: IPosts) => {
  return (
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
        {posts.map((item) => {
          const { id } = item;
          return <Post id={id} item={item} />;
        })}
      </Grid>
    </AnimatePresence>
  );
};

export default HotWeek;
