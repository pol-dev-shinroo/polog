import { AnimatePresence } from "framer-motion";
import { useIndex, useSubIndex } from "src/hooks";
import {
  FramerFlex,
  Flex,
  FramerBtn,
  Grid,
  Framer,
  Box,
  Text,
} from "src/elements";
import {
  postArrMock1,
  postArrMock2,
  postArrMock3,
  postArrMock4,
  postArrMock5,
} from "src/utils/postMock";
import { Heart } from "src/svg";

const Posts = () => {
  const { activeIndex } = useIndex();
  const { subActiveIndex, handleSubActiveIndex } = useSubIndex();
  return (
    <AnimatePresence>
      <Grid
        // sm="sm:grid-cols-1"
        // md="md:grid-cols-2"
        // lg="lg:grid-cols-3"
        className="p-3 px-3 pt-10 columns grid grid-cols-3 grid-row-gap-0 gap-5"
      >
        <Framer
          whileHover={hover}
          lightClasses={["bg-slate-50", "bg-opacity-70"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className="rounded-lg w-80 h-96 hover:shadow-md hover:shadow-gray-500"
        >
          <FramerFlex justify="center" direction="col" className="h-full">
            <FramerFlex className="w-full h-3/6">
              <img
                className="w-full h-full object-fit"
                src="https://media4.giphy.com/media/YWf50NNii3r4k/giphy.gif"
                alt="Gif"
              />
            </FramerFlex>
            <FramerFlex className="w-full h-2/6"></FramerFlex>
            <FramerFlex className="w-full h-1/6 border-t-2 "></FramerFlex>
            <FramerFlex align="center" direction="row" className="w-full h-1/6">
              <Flex align="center" className="w-4/5 h-full pl-5">
                <FramerBtn whileHover={hover} whileTap={tap} onClick={() => {}}>
                  <Box className=" w-10 h-10 rounded-full mr-3 border"></Box>
                </FramerBtn>
                <Text tagName="p" className="mr-2">
                  by
                </Text>
                <FramerBtn
                  whileHover={hover}
                  whileTap={tap}
                  onClick={() => {}}
                  className="text-sm font-bold"
                >
                  Jaeyoung
                </FramerBtn>
              </Flex>
              <Flex align="center" justify="center" className="w-1/5 h-full">
                <FramerBtn whileHover={hover} whileTap={tap} onClick={() => {}}>
                  <Heart className="h-3 mr-1" />
                </FramerBtn>
                178
              </Flex>
            </FramerFlex>
          </FramerFlex>
        </Framer>
      </Grid>
    </AnimatePresence>
  );
};

const hover = {
  translateY: -5,
  transition: { duration: 0.8 },
};

const tap = {
  scale: 1,
};
export default Posts;
