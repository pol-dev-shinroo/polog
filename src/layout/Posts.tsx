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
        className="p-3 px-3 columns grid grid-cols-3 grid-row-gap-0 gap-5"
      >
        <Framer
          lightClasses={["bg-teal-50", "bg-opacity-70"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className="rounded-lg w-96 h-96  shadow-md shadow-gray-500"
        >
          <FramerFlex justify="center" direction="col" className="h-full">
            <FramerFlex className="w-full h-2/6"></FramerFlex>
            <FramerFlex className="w-full h-2/6 border-t-2 border-red-600"></FramerFlex>
            <FramerFlex className="w-full h-1/6 border-t-2 border-red-600"></FramerFlex>
            <FramerFlex
              align="center"
              direction="row"
              className="w-full h-1/6 border border-green-600"
            >
              <Flex
                align="center"
                className="w-4/5 h-full pl-5 border border-red-600"
              >
                <FramerBtn whileHover={hover} whileTap={tap} onClick={() => {}}>
                  <Box className=" w-10 h-10 rounded-full border mr-3"></Box>
                </FramerBtn>
                <Text tagName="p" className="mr-2 border border-red-600">
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
              <Flex
                align="center"
                justify="center"
                className="w-1/5 h-full border border-red-600"
              >
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
  scale: 1.1,
};

const tap = {
  scale: 1,
};
export default Posts;
