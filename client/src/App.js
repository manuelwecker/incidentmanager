import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import dark from "./themes/dark";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonText from "./components/Button";
import ReportOne from "./pages/ReportOne";
const Headline = styled.h1`
  font-weight: bold;
  /* color: ${dark.colors.font}; */
  color: ${props => props.theme.colors.font};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  overflow: auto;
  height: 100%;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header>
              <Logo />
            </Header>
            <Main>
              <Switch>
                <Route path="/issues">
                  <Headline>Homepage – All issues</Headline>
                </Route>
                <Route path="/report" component={ReportOne}></Route>
                <Route path="/report-2">
                  <Headline>Report – Step 2 of 4</Headline>
                </Route>
                <Route path="/report-3">
                  <Headline>Report – Step 3 of 4</Headline>
                </Route>
                <Route path="/report-4">
                  <Headline>Report – Step 4 of 4</Headline>
                </Route>
                <Route path="/summary">
                  <Headline>
                    Report – Summary and last chance to edit the message before
                    send
                  </Headline>
                </Route>
                <Route path="/send">
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
                <Route path="/settings">
                  <Headline>
                    Settings – Set up your company and personal profile
                  </Headline>
                </Route>
                <Route path="/">
                  <Headline>
                    Login – Welcome to issue Tracker - tap to enter
                  </Headline>
                  <ButtonText text="Login" />
                </Route>
              </Switch>
            </Main>
            <Footer></Footer>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
