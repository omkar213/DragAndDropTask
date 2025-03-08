import { useDraggable } from "@dnd-kit/core";
// import { useSortable } from "@dnd-kit/sortable";

const TaskItem = ({ task }) => {
  // this hook makes the task draggle giving the x and y co-ordinates of the task
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  //   const { attributes, listeners, setNodeRef, transform, transition } =
  //     useSortable({
  //       id: task.id,
  //     });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  //   const style = {
  //     transform: CSS.Transform.toString(transform),
  //     transition,
  //   };
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      key={task.id}
      className="flex flex-col items-start px-4 py-4 rounded-md bg-[#4e4e4e]"
      style={style}
    >
      <h1>{task.text}</h1>
    </div>
  );
};

export default TaskItem;
