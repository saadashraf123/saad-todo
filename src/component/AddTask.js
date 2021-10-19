import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [reminder, setReminder] = useState(false);

  const Submitted = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter the task");
      return;
    }
    onAddTask({ name, reminder });
    setName("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={Submitted}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add a Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
