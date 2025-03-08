import { useDroppable } from "@dnd-kit/core";
import React, { useMemo } from "react";
import TaskItem from "./TaskItem";

const Column = ({ col, taskList }) => {
  // filtering tasks based on their Status which is default PENDING
  const filteredList = useMemo(() => {
    return (taskList || []).filter((task) => task.status === col.id);
  }, [taskList, col.id]);

  // this hook make the coloumn droppable so we can drop the tasks in here
  const { setNodeRef } = useDroppable({
    id: col.id,
  });

  return (
    <div
      ref={setNodeRef}
      key={col.id}
      className="w-full h-[400px] max-h-[400px] overflow-visible flex flex-col bg-[#2c2c2c] gap-4 hide-scrollbar"
    >
      <h1 className="w-full h-10 pt-2 rounded-md text-white text-center">
        {col.title}
      </h1>
      <div className="flex flex-col gap-3 px-4">
        {filteredList?.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
