import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import light from "./themes/light";
import dark from "./themes/dark";
import GlobalStyles from "./GlobalStyles";

const Headline = styled.h1`
  font-weight: bold;
  color: ${dark.colors.font};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <div>
          <Headline>Hello issue Tracker</Headline>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
