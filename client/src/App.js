import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import { light, dark } from "./themes/";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { H1, H2 } from "./components/Headlines";
import {
  ReportOne,
  ReportTwo,
  ReportThree,
  ReportFour,
  IssueList,
  SendMemo,
  StartScreen,
  Summary
} from "./pages";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const [activeTheme, setActiveTheme] = React.useState(light);

  function onClick() {
    if (activeTheme === light) {
      setActiveTheme(dark);
    } else {
      setActiveTheme(light);
    }
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={StartScreen} />
            <Route>
              <Header>
                <Logo />
              </Header>
              <Main>
                <Switch>
                  <Route path="/issues" component={IssueList}></Route>
                  <Route path="/report/1" component={ReportOne}></Route>
                  <Route path="/report/2" component={ReportTwo}></Route>
                  <Route path="/report/3" component={ReportThree}></Route>
                  <Route path="/report/4" component={ReportFour}></Route>
                  <Route path="/summary" component={Summary}></Route>
                  <Route path="/send" component={SendMemo}></Route>
                  <Route path="/tasks">
                    <H2>Overview of tasks after reporting the issue</H2>
                    <H1>Tasks</H1>
                  </Route>
                  <Route path="/login">
                    <H2>Enter your user and password or register</H2>
                    <H1>Login</H1>
                  </Route>
                  <Route path="/settings">
                    <H2>Set up your company and personal profile</H2>
                    <H1>Settings</H1>
                  </Route>
                </Switch>
              </Main>
              <Footer onClick={onClick} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
