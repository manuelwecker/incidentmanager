import React from "react";
import { ButtonText, ButtonEnlarge, Button } from "../components/Buttons";
import { Headline3, Headline2 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import styled from "@emotion/styled";
import tasks from "../assets/images/tasks.svg";

const IssueTasks = styled.div`
  width: 34px;
  height: 34px;
  margin: 0px;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  border: none;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  background-image: url(${tasks});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const IssueCrisisPotential = styled.div`
  width: 34px;
  height: 34px;
  margin: 0px;
  padding: 4px;
  color: #ffffff;
  background-color: ${props => props.theme.colors.warninghigh};
  border-radius: 4px;
  border: none;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
`;

const IssueListEntry = styled.div`
  width: 100%;
  height: 44px;
  margin: 4px 0 0px 0;
  padding: 4px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IssueListEntryDetails = styled(IssueListEntry)`
  padding: 0px;
  height: auto;
`;

const ContainerFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const IssueInfo = styled.span`
  min-width: 110px;
`;
const TextLeft = styled(IssueInfo)`
  text-align: left;
`;
const TextRight = styled(IssueInfo)`
  text-align: right;
`;

const IssueDetailLinks = styled.div`
  width: 100%;
  height: 34px;
  display: block;
  background-color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.background};
  text-align: left;
`;

export default function ReportThree() {
  const [isClicked, setIsClicked] = React.useState(true);
  const location = useLocation();
  return (
    <>
      <Headline3>What has happened worldwide?</Headline3>
      <Headline2>Current issues</Headline2>
      <IssueListEntry>
        <IssueCrisisPotential>1</IssueCrisisPotential>
        <ContainerFlexCol>
          <ContainerFlexRow>
            <TextLeft>Typ of Issue</TextLeft>
            <TextRight>Country</TextRight>
          </ContainerFlexRow>
          <ContainerFlexRow>
            <TextLeft>Date & Time</TextLeft>
            <TextRight>Timezone</TextRight>
          </ContainerFlexRow>
        </ContainerFlexCol>
        <ContainerFlexRow>
          <ContainerFlexCol>
            <TextRight>open</TextRight>
            <TextRight>Tasks</TextRight>
          </ContainerFlexCol>
        </ContainerFlexRow>
        <IssueTasks>9</IssueTasks>
        <ButtonEnlarge
          onClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        ></ButtonEnlarge>
      </IssueListEntry>
      {isClicked && (
        <IssueListEntryDetails>
          <IssueDetailLinks
            to="/report"
            active={location.pathname === "/report"}
          >
            Internal memo
          </IssueDetailLinks>
        </IssueListEntryDetails>
      )}
      <Link to="/report" active={location.pathname === "/report"}>
        <ButtonText text="Report a new issue"></ButtonText>
      </Link>
    </>
  );
}
