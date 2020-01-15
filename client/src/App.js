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
  Summary,
  ReportFive,
  TaskList,
  Login,
  Settings
} from "./pages";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  @media only screen and (min-width: ${props =>
    props.theme.company.deviceWidth}) {
            max-width: ${props => props.theme.company.deviceWidth};
          }
  
  }
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
            <Route exact path="/login" component={Login} />
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
                  <Route path="/report/5" component={ReportFive}></Route>
                  <Route path="/summary" component={Summary}></Route>
                  <Route path="/send" component={SendMemo}></Route>
                  <Route path="/tasks" component={TaskList}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/settings" component={Settings}></Route>
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
