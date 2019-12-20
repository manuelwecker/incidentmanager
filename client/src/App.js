import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import dark from "./themes/dark";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Footer from "./components/Footer";
import ButtonToggle from "./components/ButtonToggle";

const Headline = styled.h1`
  font-weight: bold;
  /* color: ${dark.colors.font}; */
  color: ${props => props.theme.colors.font};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Router>
          <header>
            <Logo />
          </header>
          <Switch>
            <Route path="/show-all">
              <Headline>Homepage – All issues</Headline>
            </Route>
            <Route path="/report-1">
              <Headline>Report – Step 1 of 4</Headline>
            </Route>
            <Route path="/report-2">
              <Headline>Report – Step 2 of 4</Headline>
            </Route>
            <Route path="/report-3">
              <Headline>Report – Step 3 of 4</Headline>
            </Route>
            <Route path="/report-4">
              <Headline>Report – Step 4 of 4</Headline>
            </Route>
            <Route path="/report-summary">
              <Headline>
                Report – Summary and last chance to edit the message before send
              </Headline>
            </Route>
            <Route path="/report-send">
              <Headline>
                Report – Send out and add email addresses to list
              </Headline>
            </Route>
            <Route path="/tasks">
              <Headline>
                Tasks – overview of tasks after reporting the issue
              </Headline>
            </Route>
            <Route path="/login">
              <Headline>
                Login – Enter your user and password or register
              </Headline>
            </Route>
            <Route path="/">
              <Headline>Login – Hello issue Tracker</Headline>
              <Button text="Login" />
            </Route>
          </Switch>
          <div></div>
          <Footer />
          <ButtonToggle></ButtonToggle>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
