import React from "react";
import { TextButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import CreateMemo from "../components/CreateMemo";

const TextArea = styled.div`
  border: 1px solid none;
  background-color: #ffffff;
  height: auto;
  min-height: 200px;
  border-radius: 4px;
  margin: 0px;
  padding: 4px;
`;

export default function ReportOne() {
  const location = useLocation();
  const [issues, setIssues] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function fetchIssues() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        "http://localhost:7070/issues?_sort=timedate&_order=desc&_limit=1"
      );
      const newIssue = await response.json();
      setIssues(newIssue);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchIssues();
  }, []);

  const currentIssue = issues[0];

  if (loading) return "Loading...";
  if (error) return `Error: Something went wrong`;
  if (!loading)
    return (
      <>
        <H2>Internal memo</H2>
        <H1>Inform the crisis management</H1>

        <TextArea>
          <CreateMemo
            type={currentIssue.type}
            country={currentIssue.country}
            timedate={currentIssue.timedate}
            timezone={currentIssue.timezone}
          ></CreateMemo>

          <div>
            <br />
            Prüfung (kommt aus db/issues): {currentIssue.type}
          </div>
        </TextArea>
        <Link to="/send" active={location.pathname === "/send"}>
          <TextButton>Next to step 3</TextButton>
        </Link>
      </>
    );
}
