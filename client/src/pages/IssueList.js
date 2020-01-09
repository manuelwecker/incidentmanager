import React from "react";
import { TextButton, SVGLoginButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Issue from "../components/Issue";
import styled from "@emotion/styled";
import { Plus } from "../assets/Icons";
import ContainerFlexCol from "../components/ContainerFlexCol";

export default function IssueList() {
  const location = useLocation();
  const [issues, setIssues] = React.useState([]);

  async function fetchIssues() {
    const response = await fetch("http://localhost:7070/issues");
    const newIssue = await response.json();
    setIssues(newIssue);
  }

  React.useEffect(() => {
    fetchIssues();
  }, []);

  const Aside = styled.div`
    background-position: absolute;
    position: absolute;
    left: 0px;
    bottom: +30px;
    height: 52px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 4px;
  `;

  const Div = styled(ContainerFlexCol)`
    width: 200px;
  `;

  const Span = styled.span`
    text-align: middle;
    &:a {
      text-decoration: none;
    }
  `;
  const TestButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    height: 44px;
    width: 100%;
    background-color: ${props => props.theme.colors.corporateDesignSecondary};
    border: none;
    color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.company.borderRadius};
  `;

  return (
    <>
      <H2>What has happened worldwide?</H2>
      <H1>Current issues</H1>

      {issues.map(issue => (
        <Issue
          key={issue.id}
          type={issue.type}
          country={issue.country}
          timeDate={issue.timeDate}
          timezone={issue.timezone}
          openTasks={issue.openTasks}
          tasks={issue.tasks}
        />
      ))}

      <Aside>
        <Link to="/report/1" active={location.pathname === "/report/1"}>
          <TestButton>
            <Span>Report a new issue</Span>
            <SVGLoginButton />
          </TestButton>
        </Link>
      </Aside>
    </>
  );
}
