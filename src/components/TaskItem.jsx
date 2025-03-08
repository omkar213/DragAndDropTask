import { useDraggable } from "@dnd-kit/core";
import { useContext } from "react";
// import { useSortable } from "@dnd-kit/sortable";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  // this hook makes the task draggle giving the x and y co-ordinates of the task
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task?.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const handleDelete = (id) => {
    console.log("clicked delete", id);
    if (id) {
      deleteTask(id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex items-center justify-between px-4 py-4 rounded-md bg-[#4e4e4e]"
      style={style}
    >
      <h1>{task?.text}</h1>
      <div className="pointer-events-auto">
        <button
          type="button"
          data-no-dnd="true"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(task?.id);
          }}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
