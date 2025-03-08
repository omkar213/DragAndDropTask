import React, { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    // add new Task to pending status before checking the whitespace
    if (task.trim() !== "") {
      const newTask = { id: Date.now(), text: task, status: "PENDING" };
      setTaskList((prev) => [newTask, ...prev]);
      console.log(newTask);
    }
  };

  // delete Task from taskList
  const deleteTask = (taskid) => {
    setTaskList((prev) => prev.filter((prevTask) => prevTask.id !== taskid));
  };

  const updateTaskStatus = (taskid, newStatus) => {
    // get the prev task array match it with id of object being draged and changed it status
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskid ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ taskList, addTask, deleteTask, updateTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};
