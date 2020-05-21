import React from "react";
import { TextButton, SvgTextFooterButton } from "../components/Buttons";
import { H1, H2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import CreateMemo from "../components/CreateMemo";
import Aside from "../components/Aside";
import { Next } from "../assets/Icons";
import useFetch from "../hooks/useFetch";

const TextArea = styled.div`
  border: 1px solid none;
  background-color: #ffffff;
  height: auto;

  border-radius: 4px;
  margin: 0px;
  padding: 4px;
`;

export default function SendMemo() {
  // const location = useLocation();
  const [issue, setIssue] = React.useState(false);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  const response = useFetch("/api/lastissue");

  console.log("response", response);

  // async function fetchIssues() {
  //   try {
  //     setLoading(true);
  //     setError(false);
  //     // const response = await fetch(
  //     //   "/api/issues?_sort=timeDate&_order=desc&_limit=1"
  //     // );

  //     const newIssue = await response.json();
  //     setIssue(newIssue);
  //   } catch (error) {
  //     console.error(error);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  React.useEffect(() => {
    setIssue(response.data);
  }, [response]);

  if (!issue) return "Loading...";
  if (response.status !== 200) {
    return `Error: Something went wrong`;
  }
  if (issue) {
    const currentIssue = issue[0];
    console.log(currentIssue.type);

    return (
      <>
        <H2>Internal memo</H2>
        <H1>Inform the crisis management</H1>
        <TextArea>
          <CreateMemo
            type={currentIssue.type}
            country={currentIssue.country}
            city={currentIssue.city}
            timeDate={currentIssue.timeDate}
            crisisPotential={currentIssue.crisisPotential}
          ></CreateMemo>
        </TextArea>
        <h4>Email recipient</h4>
        <H2>Add email address comma separated</H2>
        <TextArea name="recipient">manuel-dev@web.de</TextArea>

        <Aside>
          <Link to="/tasks">
            <SvgTextFooterButton
              svg={<Next />}
              text="Send internal memo and show tasks"
            ></SvgTextFooterButton>
          </Link>
        </Aside>
      </>
    );
  }
}
