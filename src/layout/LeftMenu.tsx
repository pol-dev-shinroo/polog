import { FramerFlex, Text, FramerBtn } from "src/elements";
import { useCounter } from "src/hooks";

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

const LeftMenu = () => {
  const { count } = useCounter({ end: 989000 });
  return (
    <FramerFlex
      align="end"
      justify="center"
      direction="col"
      className="border border-red-600 h-full w-1/6"
    >
      <FramerFlex
        justify="between"
        direction="col"
        positionClasses="fixed"
        framertransition={{ duration: 0.5 }}
        className="bottom-28 left-16 rounded-2xl shadow-lg shadow-gray-500 h-4/6 w-1/6"
      >
        {/* first box */}
        <FramerFlex
          align="center"
          justify="center"
          direction="col"
          lightClasses={["bg-blue-100", "bg-opacity-70", "text-slate-900"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className=" w-full h-1/6 shadow shadow-gray-500 rounded-t-2xl"
        >
          <Text
            tagName="h2"
            darkClasses={["dark:text-slate-50"]}
            lightClasses={["text-slate-900"]}
            className="text-xl font-bold"
          >
            Active Bloggers:
          </Text>
          <Text
            tagName="h3"
            darkClasses={["dark:text-slate-50"]}
            lightClasses={["text-slate-900"]}
            className="text-lg font-bold"
          >
            {count} 👩‍💻👨‍💻
          </Text>
        </FramerFlex>
        <FramerFlex
          align="start"
          justify="center"
          direction="col"
          lightClasses={["bg-blue-100", "bg-opacity-70", "text-slate-900"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className="w-full h-3/6 shadow shadow-gray-500 pl-5"
        >
          <FramerFlex align="center" justify="start" className="w-full h-1/6">
            <Text
              tagName="h3"
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
            >
              Categories:
            </Text>
          </FramerFlex>
          <FramerFlex
            align="start"
            justify="between"
            direction="col"
            className="w-full h-5/6"
          >
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              🧑‍🍳 Food
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              📰 News
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              🖥️ Coding
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              🅱️ Blogs
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              🎵 Music
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              🪙 Economy
            </FramerBtn>
            <FramerBtn
              onClick={() => {}}
              darkClasses={["dark:text-slate-50"]}
              lightClasses={["text-slate-900"]}
              whileHover={hover}
              whileTap={tap}
              className="text-2xl font-bold"
            >
              📣 Politics
            </FramerBtn>
          </FramerFlex>
        </FramerFlex>
        <FramerFlex
          align="start"
          justify="center"
          direction="col"
          lightClasses={["bg-blue-100", "bg-opacity-70", "text-slate-900"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className="w-full h-2/6 shadow shadow-gray-500 rounded-b-2xl"
        >
          <Text>#tag1</Text>
          <Text>#tag1</Text>
          <Text>#tag1</Text>
          <Text>#tag1</Text>
          <Text>#tag1</Text>
          <Text>#tag1</Text>
          <Text>#tag1</Text>
        </FramerFlex>
      </FramerFlex>
    </FramerFlex>
  );
};

export default LeftMenu;
