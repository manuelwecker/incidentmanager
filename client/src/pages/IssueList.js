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
// import styled from "@emotion/styled";
import { Plus, Avatar, Tasks, Next } from "../assets/Icons";
// import ContainerFlexCol from "../components/ContainerFlexCol";
import Aside from "../components/Aside";
import useFetch from "../hooks/useFetch";

export default function IssueList() {
  // const location = useLocation();
  const [issues, setIssues] = React.useState(false);
  const response = useFetch("/api/issues");

  React.useEffect(() => {
    setIssues(response);
  }, [response]);

  return (
    <>
      <H2>What’s happening?</H2>
      {!issues && <H1>No Challenges</H1>}
      {issues && (
        <>
          <H1>Current Challenges</H1>

          {issues.map(issue => (
            <Issue
              key={issue._id}
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
        </>
      )}
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
