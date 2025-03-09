import { useContext } from "react";
import AddTasK from "./components/AddTask";
import { TaskContext } from "./context/TaskContext";
import { Columns } from "./constants";
import Column from "./components/Column";
import { DndContext } from "@dnd-kit/core";

function App() {
  const { taskList, updateTaskStatus } = useContext(TaskContext);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskid = active.id;
    const newStatus = over.id;

    updateTaskStatus(taskid, newStatus);
  }

  return (
    <div className="w-full h-full flex flex-col gap-20 px-5 lg:px-16 overflow-x-hidden">
      <AddTasK />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
        <DndContext onDragEnd={handleDragEnd}>
          {Columns?.map((col) => {
            return <Column key={col.id} col={col} taskList={taskList} />;
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default App;
