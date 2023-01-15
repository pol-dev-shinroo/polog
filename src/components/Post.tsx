import { useDark } from "src/hooks";
import { FramerFlex, Flex, FramerBtn, Framer, Box, Text } from "src/elements";
import { Heart, Comments } from "src/svg";

const Post = () => {
  const { isDark } = useDark();
  return (
    <Framer
      whileHover={hover}
      lightClasses={["bg-slate-50", "bg-opacity-70"]}
      darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
      className="rounded-2xl w-96 h-96 hover:shadow-md hover:shadow-gray-500 cursor-pointer z-10"
    >
      <FramerFlex justify="center" direction="col" className="h-full">
        <FramerFlex className="w-full h-3/6">
          <img
            className="w-full h-full object-fit rounded-t-2xl"
            src="https://media4.giphy.com/media/YWf50NNii3r4k/giphy.gif"
            alt="Gif"
          />
        </FramerFlex>
        <FramerFlex
          align="start"
          justify="start"
          direction="col"
          className="w-full h-2/6 pl-5"
        >
          {/* Title */}
          <Text tagName="h3" darkClasses={["dark:text-slate-50"]}>
            Title Title Title Title
          </Text>
          {/* Sub-Title */}
          <Text
            tagName="p"
            darkClasses={["dark:text-slate-50"]}
            className="ext-ellipsis overflow-hidden"
          >
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
          </Text>
        </FramerFlex>
        <FramerFlex
          align="center"
          justify="start"
          direction="col"
          className="h-1/6 w-full pt-2"
        >
          <FramerFlex
            align="center"
            justify="end"
            direction="row"
            className="w-full h-1/3 border-t-2 border-gray-500 pr-5"
          >
            <Text
              tagName="p"
              darkClasses={["dark:text-gray-500"]}
              className="text-sm"
            >
              · 5 days ago
            </Text>
          </FramerFlex>
          <FramerFlex
            align="center"
            justify="between"
            direction="row"
            className="w-full h-2/3 pr-5"
          >
            <Flex align="center" className="h-full pl-5">
              <FramerBtn
                whileHover={btnHover}
                whileTap={tap}
                onClick={() => {}}
                className="w-6 h-6 rounded-full mr-2 border"
              >
                <Box className=""></Box>
              </FramerBtn>
              <Text
                tagName="p"
                darkClasses={["dark:text-slate-400"]}
                className="text-sm mr-1"
              >
                by
              </Text>
              <FramerBtn
                whileHover={textHover}
                whileTap={tap}
                onClick={() => {}}
                darkClasses={["dark:text-slate-50"]}
                className="text-sm font-bold"
              >
                Jaeyoung
              </FramerBtn>
            </Flex>
            <Flex align="center" className="w-1/4 h-full">
              <Flex justify="end" className="w-1/2">
                <FramerBtn
                  whileHover={btnHover}
                  whileTap={tap}
                  onClick={() => {}}
                  className="mr-1"
                >
                  <Comments
                    isDark={isDark}
                    darkFill="#f1f5f9"
                    className="h-3"
                  />
                </FramerBtn>
                <Text
                  tagName="p"
                  darkClasses={["dark:text-gray-400"]}
                  className="mb-0.5"
                >
                  12
                </Text>
              </Flex>
              <Flex justify="end" className="w-1/2">
                <FramerBtn
                  whileHover={btnHover}
                  whileTap={tap}
                  onClick={() => {}}
                  className="mr-1"
                >
                  <Heart isDark={isDark} darkFill="#f1f5f9" className="h-3" />
                </FramerBtn>
                <Text
                  tagName="p"
                  darkClasses={["dark:text-gray-400"]}
                  className="mb-0.5"
                >
                  12
                </Text>
              </Flex>
            </Flex>
          </FramerFlex>
        </FramerFlex>
      </FramerFlex>
    </Framer>
  );
};

// card itself
const hover = {
  translateY: -5,
  transition: { duration: 0.2 },
};

// heart + comments
const tap = {
  scale: 0.9,
};

const btnHover = {
  scale: 1.1,
};

// name
const textHover = {
  scale: 0.9,
};

export default Post;
