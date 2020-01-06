import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import dark from "./themes/dark";
import light from "./themes/light";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ButtonText } from "./components/Buttons";
import {
  ReportOne,
  ReportTwo,
  ReportThree,
  ReportFour,
  IssueList
} from "./pages";
const Headline = styled.h1`
  font-weight: bold;
  color: ${props => props.theme.colors.font};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header>
              <Logo />
            </Header>
            <Main>
              <Switch>
                <Route path="/issues" component={IssueList}></Route>
                <Route path="/report" component={ReportOne}></Route>
                <Route path="/report-2" component={ReportTwo}></Route>
                <Route path="/report-3" component={ReportThree}></Route>
                <Route path="/report-4" component={ReportFour}></Route>
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
                  <ButtonText>Login</ButtonText>
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
