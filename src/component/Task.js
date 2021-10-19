const task = ({ task, onDelete, onReminderClick }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3 onDoubleClick={() => onReminderClick(task.id)}>
        {task.name}
        <i
          className="fas fa-times"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        ></i>
      </h3>
    </div>
  );
};

export default task;
