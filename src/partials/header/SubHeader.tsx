import { AnimatePresence } from "framer-motion";
import { FramerFlex, Flex, FramerBtn } from "src/elements";
import { useIndex, useSubIndex } from "src/hooks";

const SubHeader = () => {
  const { activeIndex } = useIndex();
  const { subActiveIndex, handleSubActiveIndex } = useSubIndex();

  return (
    <AnimatePresence>
      {activeIndex === 1 && (
        <FramerFlex
          align="center"
          justify="center"
          framerInitial={{ y: -50, position: "absolute", top: "60px" }}
          framerAnimate={{ y: 0 }}
          framerExit={{ y: -50 }}
          framertransition={{ type: "spring", stiffness: 300, damping: 30 }}
          zIndex="z-10"
          className="border border-red-700 w-full"
        >
          <Flex
            align="center"
            justify="between"
            direction="row"
            className="w-1/3 p-2.5 border border-green-700"
          >
            <Flex
              align="center"
              justify="center"
              className="w-4/5 border border-green-700"
            >
              <FramerBtn
                onClick={() => handleSubActiveIndex(0)}
                whileHover={hover}
                whileTap={tap}
                lightClasses={
                  subActiveIndex === 0 ? ["text-slate-900"] : ["text-gray-400"]
                }
                darkClasses={
                  subActiveIndex === 0
                    ? ["dark:text-slate-50"]
                    : ["dark:text-gray-400"]
                }
                className={`w-4/5 border border-purple-700 text-lg ${
                  subActiveIndex === 0 && `font-bold `
                } `}
              >
                Month
              </FramerBtn>
            </Flex>
            <Flex
              align="center"
              justify="center"
              className="w-4/5 border border-green-700"
            >
              <FramerBtn
                onClick={() => handleSubActiveIndex(1)}
                whileHover={hover}
                whileTap={tap}
                lightClasses={
                  subActiveIndex === 1 ? ["text-slate-900"] : ["text-gray-400"]
                }
                darkClasses={
                  subActiveIndex === 1
                    ? ["dark:text-slate-50"]
                    : ["dark:text-gray-400"]
                }
                className={`w-4/5 border border-purple-700 text-lg ${
                  subActiveIndex === 1 && `font-bold `
                } `}
              >
                Week
              </FramerBtn>
            </Flex>
            <Flex
              align="center"
              justify="center"
              className="w-4/5 border border-green-700"
            >
              <FramerBtn
                onClick={() => handleSubActiveIndex(2)}
                whileHover={hover}
                whileTap={tap}
                lightClasses={
                  subActiveIndex === 2 ? ["text-slate-900"] : ["text-gray-400"]
                }
                darkClasses={
                  subActiveIndex === 2
                    ? ["dark:text-slate-50"]
                    : ["dark:text-gray-400"]
                }
                className={`w-4/5 border border-purple-700 text-lg ${
                  subActiveIndex === 2 && `font-bold `
                } `}
              >
                Today
              </FramerBtn>
            </Flex>
          </Flex>
        </FramerFlex>
      )}
    </AnimatePresence>
  );
};

const hover = {
  scale: 1.1,
};

const tap = {
  scale: 0.9,
};

export default SubHeader;