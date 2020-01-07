import React from "react";
import { ButtonText } from "../components/Buttons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import Issue from "../components/Issue";

export default function ReportThree() {
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
      <Headline3>What has happened worldwide?</Headline3>
      <Headline2>Current issues</Headline2>

      <div>
        {issues.map(issue => (
          <Issue
            key={issue.id}
            type={issue.type}
            country={issue.country}
            timedate={issue.timedate}
            timezone={issue.timezone}
            opentasks={issue.opentasks}
            tasks={issue.tasks}
          />
        ))}
      </div>

      <Link to="/report" active={location.pathname === "/report"}>
        <ButtonText text="Report a new issue"></ButtonText>
      </Link>
    </>
  );
}
