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
    const response = await fetch("/api/issues");
    const newIssue = await response.json();
    setIssues(newIssue);
  }

  React.useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      <H2>What’s happening on a global scale?</H2>
      <H1>Current challenges</H1>

      {issues.map(issue => (
        <Issue
          key={issue.id}
          type={issue.type}
          country={issue.country}
          city={issue.city}
          timeDate={issue.timeDate}
          timezone={issue.timezone}
          openTasks={issue.openTasks}
          tasks={issue.tasks}
          crisisPotential={issue.crisisPotential}
        />
      ))}
      <Aside>
        <Link to="/report/1">
          <SvgTextFooterButton
            svg={<Plus />}
            text="Report an issue"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
