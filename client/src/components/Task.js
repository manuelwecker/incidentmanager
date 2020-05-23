import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { EnlargeButton, SVGSquareButton } from "../components/Buttons";
// import { useLocation } from "react-router-dom";
// import tasks from "../assets/images/tasks.svg";
// import IssueCrisisPotential from "../components/Forms/IssueCrisisPotential";
// import { TextEntry, DetailLink, BiggerField, TaskEntry } from "./Forms";
import { Next, Fire, Done, Todo } from "../assets/Icons";
import DeleteData from "../api/DeleteData";
import { DeleteButton } from "../components/Buttons/DeleteButton";

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

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default function Task({
  _id,
  number,
  taskName,
  taskStatus,
  onTaskStatusChange
}) {
  async function handleDelete(_id) {
    await DeleteData("/api/deletetask", { _id });
    window.location.reload();
  }

  return (
    <>
      <TextEntryWrapper>
        <TextLeft>
          <label htmlFor={number}>
            {number}.&nbsp;{taskName}
          </label>
        </TextLeft>
        <Input
          type="checkbox"
          id={number}
          name={number}
          value={taskName}
          onChange={event =>
            onTaskStatusChange(event.target.name, event.target.checked)
          }
          checked={taskStatus}
        />
        <Row>
          <label htmlFor={number}>
            <SVGSquareButton>
              {taskStatus ? <Done /> : <Todo />}
            </SVGSquareButton>
          </label>

          <DeleteButton onClick={() => handleDelete(_id)}>
            <a></a>
          </DeleteButton>
        </Row>
      </TextEntryWrapper>
    </>
  );
}

Task.propTypes = {
  _id: PropTypes.string,
  number: PropTypes.number,
  taskName: PropTypes.string,
  taskStatus: PropTypes.bool,
  onTaskStatusChange: PropTypes.func
};
