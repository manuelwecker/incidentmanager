import React from "react";
import { EnlargeButton, SVGSquareButton } from "../components/Buttons";
// import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
// import tasks from "../assets/images/tasks.svg";
// import IssueCrisisPotential from "../components/Forms/IssueCrisisPotential";
// import { TextEntry, DetailLink, BiggerField, TaskEntry } from "./Forms";
import { Next, Fire, Done, Todo } from "../assets/Icons";

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

const TextEntryWrapper = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid ${props => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  margin: 0px;
`;

const Input = styled.input`
  visibility: hidden;
  height: 0px;
  width: 0px;
`;

export default function Task({ id, taskName, taskStatus, onTaskStatusChange }) {
  return (
    <>
      <TextEntryWrapper>
        <TextLeft>
          <label htmlFor={id}>
            {id}.&nbsp;{taskName}
          </label>
        </TextLeft>
        <Input
          type="checkbox"
          id={id}
          name={id}
          value={taskName}
          onChange={event =>
            onTaskStatusChange(event.target.name, event.target.checked)
          }
          checked={taskStatus}
        />
        <label htmlFor={id}>
          <SVGSquareButton>{taskStatus ? <Done /> : <Todo />}</SVGSquareButton>
        </label>
      </TextEntryWrapper>
    </>
  );
}
