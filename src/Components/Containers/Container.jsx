import React from "react";
import "./Container.scss";
import TaskContainer from "./TaskContainer";

export default function Container() {
  const taskStages = [
    {
      id: 1,
      headerColor: "purple",
      headerName: "Pending",
      backgroundColor: "antiquewhite",
    },
    {
      id: 2,
      headerColor: "blue",
      headerName: "In Progress",
      backgroundColor: "antiquewhite",
    },
    {
      id: 3,
      headerColor: "orange",
      headerName: "Completed",
      backgroundColor: "antiquewhite",
    },
  ];
  const taskArray = [
    {
      id: 1,
      taskDesc: "this is a sample task for in progress",
      taskStage: 2,
      creationDate: new Date().toDateString(),
      assignedTo: "Gaurav",
    },
    {
      id: 2,
      taskDesc: "this is a sample task for pending",
      taskStage: 1,
      creationDate: new Date().toDateString(),
      assignedTo: "Gaurav",
    },
    {
      id: 3,
      taskDesc: "this is a sample task for pending",
      taskStage: 1,
      creationDate: new Date().toDateString(),
      assignedTo: "Gaurav",
    },
    {
      id: 4,
      taskDesc: "this is a sample task for completed",
      taskStage: 3,
      creationDate: new Date().toDateString(),
      assignedTo: "Gaurav",
    },
  ];
  return (
    <div className="container">
      {taskStages.map((stage) => {
        return (
          <TaskContainer
            id={stage.id}
            tasks={taskArray}
            headerName={stage.headerName}
            headerColor={stage.headerColor}
            backgroundColor={stage.backgroundColor}
          />
        );
      })}
    </div>
  );
}
