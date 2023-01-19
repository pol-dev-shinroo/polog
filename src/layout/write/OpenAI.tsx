import { useToggleWrite } from "src/hooks";
import { FramerFlex } from "src/elements";
const OpenAI = () => {
  const { toggleAI } = useToggleWrite();
  if (toggleAI) {
    return (
      <FramerFlex
        direction="col"
        // framerInitial={{ x: 1000, opacity: 0 }}
        // framerAnimate={{ x: 0, opacity: 1 }}
        // framerExit={{ x: 0, opacity: 0 }}
        // framertransition={{ duration: 0.5 }}
        className={`h-full w-1/2 border-8 border-purple-700`}
      ></FramerFlex>
    );
  } else {
    return null;
  }
};

export default OpenAI;
