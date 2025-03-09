import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTasK = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handleAddTask = () => {
    if (task) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="lg:max-w-4xl w-full mx-auto flex items-center gap-3 mt-20 h-10">
      <h1 className="text-sm md:text-base">Add Task</h1>
      <input
        type="text"
        name="task"
        placeholder="Write your task here"
        className="lg:max-w-[700px] w-full h-full border-blue-300 border-[3px]"
        value={task}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-400 h-full text-sm lg:text-base px-3 cursor-pointer rounded-sm"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTasK;
