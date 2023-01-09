import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { flex, dark } from "./lib";
import { Justify, Align, Direction } from "./types/flex";
import { Dark } from "./types/dark";
import { Grid } from "./elements";

function App() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Grid
        align="center"
        justify="center"
        direction="column"
        dark={["bg-slate-800"]}
      >
        This text will be red
        <MyBtn
          $dark={["bg-stone-200", "text-xs", "text-black", "rounded-3xl"]}
          className="bg-slate-900 p-4 text-white"
          onClick={handleThemeSwitch}
        >
          Dark Mode
        </MyBtn>
        <Header>Hello world</Header>
      </Grid>
    </>
  );
}

interface MyBtnProps {
  $dark?: Dark;
}

const MyBtn = tw.button<MyBtnProps>`
 ${({ $dark }) => $dark && dark($dark)}
`;

const Header = styled.h1`
  color: red;
`;

export default App;
