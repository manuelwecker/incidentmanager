import React from "react";
import {
  TextButton,
  SVGSquareButton,
  SvgTextButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Issue from "../components/Issue";
import styled from "@emotion/styled";
import { Plus, Avatar, Tasks, Next } from "../assets/Icons";
import ContainerFlexCol from "../components/ContainerFlexCol";
import Aside from "../components/Aside";

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
          <SvgTextFooterButton
            svg={<Next />}
            text="Report a new issue"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
