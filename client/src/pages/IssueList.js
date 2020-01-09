import React from "react";
import { TextButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Issue from "../components/Issue";

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

      <div>
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
      </div>

      <Link to="/report/1" active={location.pathname === "/report/1"}>
        <TextButton>Report a new issue</TextButton>
      </Link>
    </>
  );
}
