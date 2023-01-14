import { AnimatePresence } from "framer-motion";
import { FramerFlex, Framer } from "src/elements";
import { useIndex } from "src/hooks";

const HeaderMenuUnderLine = () => {
  const { activeIndex } = useIndex();
  return (
    <FramerFlex
      align="center"
      justify={
        activeIndex === 0 ? "start" : activeIndex === 1 ? "center" : "end"
      }
      className=" w-3/5 py-0.5"
    >
      <AnimatePresence>
        <Framer
          layout={true}
          framertransition={spring}
          lightClasses={["bg-slate-600"]}
          darkClasses={["dark:bg-slate-300"]}
          className="w-1/3 h-0.5"
        ></Framer>
      </AnimatePresence>
    </FramerFlex>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default HeaderMenuUnderLine;
