import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <GlobalStyles />
    <App />
  </RecoilRoot>
);
