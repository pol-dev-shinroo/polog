import { Flex } from "src/elements";
import { Header, RightMenu, Posts, LeftMenu } from "src/layout";

const Home = () => {
  return (
    <>
      <Header />
      <Flex justify="between" direction="row" className="w-full pt-11 px-24">
        <LeftMenu />
        <Posts />
        <RightMenu />
      </Flex>
    </>
  );
};

export default Home;
