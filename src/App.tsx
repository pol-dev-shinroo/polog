import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tw, { styled, css } from "twin.macro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledInput>
          Edit <code>src/App.tsx</code> and save to reload.
        </StyledInput>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const StyledInput = styled.p`
  color: black;
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3 
        md:mt-10
        lg:mt-36
        md:pl-24
        md:pr-24
    `}
`;

export default App;
