import React from "react";
import {
  TextButton,
  SVGSquareButton,
  SvgTextButton,
  SvgTextFooterButton
} from "../components/Buttons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, useHistory, Link } from "react-router-dom";
import Issue from "../components/Issue";
import styled from "@emotion/styled";
import { Plus, Avatar, Tasks, Next } from "../assets/Icons";
import ContainerFlexCol from "../components/ContainerFlexCol";
import Aside from "../components/Aside";
import Task from "../components/Task";
import { BiggerField, FormReport } from "../components/Forms";
import useSessionStorage from "../hooks/useSessionStorage";

export default function IssueList() {
  const location = useLocation();
  const history = useHistory();

  // const [taskId, setTaskId] = useSessionStorage("id", "");
  // const [taskStatus, setTaskStatus] = useSessionStorage("taskStatus", "");
  // const [taskName, setTaskName] = useSessionStorage("taskName", "");

  const [tasks, setTasks] = React.useState([]);

  async function fetchTasks() {
    const response = await fetch("/api/issues/1/tasks");
    const newTask = await response.json();
    setTasks(newTask);
  }

  React.useEffect(() => {
    fetchTasks();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    tasks.forEach(task => {
      fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      });
    });
    history.push("/issues");
  }

  function handleTaskStatusChange(id, checked) {
    const newTasks = [...tasks];
    const updatedTaskIndex = newTasks.findIndex(
      task => task.id === parseInt(id)
    );
    newTasks[updatedTaskIndex].taskStatus = checked;
    setTasks(newTasks);
  }

  return (
    <>
      <H2>Checklist</H2>
      <H1>Current tasks</H1>

      <BiggerField>
        <H3>&nbsp;You have open tasks</H3>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            onTaskStatusChange={handleTaskStatusChange}
          />
        ))}
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
