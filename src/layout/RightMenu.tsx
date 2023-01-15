import { FramerFlex, Flex, FramerBtn, Grid } from "src/elements";

const RightMenu = () => {
  return (
    <FramerFlex
      align="start"
      justify="center"
      direction="col"
      className="border border-red-600 h-full w-1/6"
    >
      <FramerFlex
        justify="between"
        direction="col"
        positionClasses="fixed"
        className="bottom-52 right-20 border-8 border-red-800 h-3/5 w-1/6"
      >
        <FramerFlex className="border border-slate-50 bg-slate-100">
          <h1>Hello World</h1>
        </FramerFlex>
        <FramerFlex className="border border-slate-50 bg-slate-100">
          <h1>Hello World</h1>
        </FramerFlex>
        <FramerFlex className="border border-slate-50 bg-slate-100">
          <h1>Hello World</h1>
        </FramerFlex>
      </FramerFlex>
    </FramerFlex>
  );
};

export default RightMenu;
