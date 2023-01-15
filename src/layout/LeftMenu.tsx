import { motion } from "framer-motion";
import { FramerFlex, Text } from "src/elements";

const LeftMenu = () => {
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
        className="bottom-52 left-16 border-8 border-red-800 h-3/5 w-1/6"
      >
        <FramerFlex
          align="center"
          justify="center"
          direction="col"
          lightClasses={["bg-blue-100", "bg-opacity-70", "text-slate-900"]}
          darkClasses={["dark:bg-zinc-700", "dark:bg-opacity-70"]}
          className="rounded-2xl w-full h-1/3 shadow shadow-gray-500"
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
            989,800 👩‍💻👨‍💻
          </Text>
        </FramerFlex>
        <FramerFlex className="border border-slate-50 bg-slate-100">
          <Text>Hello World</Text>
        </FramerFlex>
        <FramerFlex className="border border-slate-50 bg-slate-100">
          <Text>Hello World</Text>
        </FramerFlex>
      </FramerFlex>
    </FramerFlex>
  );
};

export default LeftMenu;
