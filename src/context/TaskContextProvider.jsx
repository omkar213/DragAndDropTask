import React, { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    // add new Task to pending status before checking the whitespace
    if (task.trim() !== "") {
      const newTask = { id: Date.now(), text: task, status: "PENDING" };
      setTaskList((prev) => [newTask, ...prev]);
    }
  };

  const updateTaskStatus = (taskid, newStatus) => {
    // get the prev task array match it with id of object being draged and changed it status
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskid ? { ...task, status: newStatus } : task
      )
    );
  };

  useEffect(() => {
    console.log("task List", taskList);
  }, [taskList]);

  return (
    <TaskContext.Provider value={{ taskList, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
