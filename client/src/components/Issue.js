import React from "react";
import PropTypes from "prop-types";

import { EnlargeButton } from "../components/Buttons";
// import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import tasks from "../assets/images/tasks.svg";
import IssueCrisisPotential from "../components/Forms/IssueCrisisPotential";
import { TextEntry, DetailLink, BiggerField } from "./Forms";
import { Next } from "../assets/Icons";

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
  min-width: 50px;
  font-size: 12px;
`;
const TextLeft = styled(IssueInfo)`
  text-align: left;
`;
const TextRight = styled(IssueInfo)`
  text-align: right;
`;

export default function Issue({
  type,
  city,
  country,
  timeDate,
  timezone,
  openTasks,
  crisisPotential
}) {
  const [isClicked, setIsClicked] = React.useState(false);

  // function ShortenDate(date) {
  // let shortenedDate = `date`;
  // shortenedDate =
  //   shortenedDate > 10
  //     ? Number(shortenedDate.toString().slice(0, 5))
  //     : shortenedDate;
  // return console.log(shortenedDate);
  // }
  return (
    <>
      <IssueListEntry>
        <IssueCrisisPotential crisisPotential={parseInt(crisisPotential)}>
          {crisisPotential}
        </IssueCrisisPotential>
        <ContainerFlexCol>
          <ContainerFlexRow>
            <TextLeft>
              <strong>{type}</strong>
            </TextLeft>
            <TextRight>{city}</TextRight>
          </ContainerFlexRow>
          <ContainerFlexRow>
            <TextLeft>
              {/* <ShortenDate date= */}
              {/* {timeDate} */}
              {/* // /> */}
            </TextLeft>
            <TextRight>{country}</TextRight>
          </ContainerFlexRow>
        </ContainerFlexCol>
        <ContainerFlexRow>
          <ContainerFlexCol>
            <TextRight>open</TextRight>
            <TextRight>tasks</TextRight>
          </ContainerFlexCol>
        </ContainerFlexRow>
        <IssueTasks>{openTasks}</IssueTasks>
        <EnlargeButton
          onClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        ></EnlargeButton>
      </IssueListEntry>
      {isClicked && (
        <BiggerField>
          <DetailLink
            url="/send"
            text="Internal memo"
            svg={<Next />}
          ></DetailLink>
          <DetailLink
            url="/send"
            text="Press release"
            svg={<Next />}
          ></DetailLink>
          <DetailLink url="/tasks" text="Task list" svg={<Next />}></DetailLink>
        </BiggerField>
      )}
    </>
  );
}

Issue.propTypes = {
  type: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  timeDate: PropTypes.string,
  timezone: PropTypes.string,
  openTasks: PropTypes.string,
  crisisPotential: PropTypes.string
};
