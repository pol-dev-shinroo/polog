// src/styles/GlobalStyles.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  h1 {
    ${tw`text-4xl font-bold`}
  }
  h2 {
    ${tw`text-3xl font-medium`}
  }
  h3 {
    ${tw`text-2xl font-medium`}
  }
  p {
    ${tw`text-base font-normal`}
  }
  span {
    ${tw`text-sm font-normal`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
