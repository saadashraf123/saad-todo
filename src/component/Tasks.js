import Task from "./Task";

const Tasks = ({ task, onDelete, onReminderClick }) => {
  return (
    <>
      {task.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onReminderClick={onReminderClick}
        />
      ))}
    </>
  );
};

export default Tasks;
