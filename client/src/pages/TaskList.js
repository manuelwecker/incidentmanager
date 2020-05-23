import React from "react";

import {
  TextButton,
  SVGSquareButton,
  SvgTextButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2, H3, H4 } from "../components/Headlines";
import { useLocation, useHistory, Link } from "react-router-dom";
import Issue from "../components/Issue";
import styled from "@emotion/styled";
import { Plus, Avatar, Tasks, Next } from "../assets/Icons";
import ContainerFlexCol from "../components/ContainerFlexCol";
import Aside from "../components/Aside";
import Task from "../components/Task";
import { BiggerField, FormReport } from "../components/Forms";
import useSessionStorage from "../hooks/useSessionStorage";
import { TaskInput, TaskInputNumber } from "../components/Forms/Inputs";
import SaveData from "../api/SaveData";
import useFetch from "../hooks/useFetch";

const TaskListBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const AddButton = styled(SvgTextButton)`
  display: flex;
  height: 30px;
  width: 30px;
  margin: 0px;
  margin-left: 20px;

  &::-moz-focus-inner {
    border: 0;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function IssueList() {
  const location = useLocation();
  const history = useHistory();

  const [tasks, setTasks] = React.useState([]);
  const [addedTask, setAddedTask] = React.useState();
  const [taskNumber, setTaskNumber] = React.useState();

  const response = useFetch("/api/tasks");

  // const [taskId, setTaskId] = useSessionStorage("id", "");
  // const [taskStatus, setTaskStatus] = useSessionStorage("taskStatus", "");
  // const [taskName, setTaskName] = useSessionStorage("taskName", "");

  // async function fetchTasks() {
  //   const tasks = await GetTasks();
  //   // const newTask = await response.json();
  //   setTasks(tasks);
  // }

  React.useEffect(() => {
    setTasks(response.data);
  }, [response]);

  async function handleSubmit(event) {
    event.preventDefault();

    tasks.forEach(task => {
      fetch("/api/updatetasks/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      });
    });
    history.push("/issues");
  }

  function handleTaskStatusChange(number, checked) {
    const newTasks = [...tasks];
    const updatedTaskIndex = newTasks.findIndex(
      task => task.number === parseInt(number)
    );
    newTasks[updatedTaskIndex].taskStatus = checked;
    setTasks(newTasks);
  }

  // function handleChange(i, event) {
  //   const values = [...addedTask];
  //   values[i].value = event.target.value;
  //   setAddedTask(values);
  // }

  async function handleAdd() {
    const newTask = {
      number: parseInt(taskNumber),
      taskName: addedTask,
      taskStatus: false
    };
    await SaveData("/api/addtask", newTask);
    window.location.reload();
  }

  if (!tasks) return "Loading...";
  return (
    <>
      <H2>Checklist</H2>
      <H1>Current tasks</H1>

      <BiggerField>
        <H3>&nbsp;You have open tasks</H3>
        {tasks.map(task => (
          <Task
            key={task._id}
            _id={task._id}
            number={task.number}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            onTaskStatusChange={handleTaskStatusChange}
          />
        ))}
        <TaskListBottom>
          <H4>Add task</H4>
          <Row>
            <TaskInputNumber
              placeholder="Enter number"
              onChange={e => setTaskNumber(e.target.value)}
            />
            <TaskInput
              placeholder="Enter new task"
              onChange={e => setAddedTask(e.target.value)}
            />
            <AddButton svg={<Plus />} onClick={() => handleAdd()}></AddButton>
          </Row>
        </TaskListBottom>
      </BiggerField>

      <FormReport onSubmit={handleSubmit}>
        <Aside>
          <SvgTextFooterButton
            svg={<Next />}
            text="Save and back to all issues"
          ></SvgTextFooterButton>
        </Aside>
      </FormReport>
    </>
  );
}
