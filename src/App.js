import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
function App() {
  const [task, setTask] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const onAddTask = (tasks) => {
    const id = Math.floor(Math.random() * 10) + 1;
    const newTask = { id, ...tasks };
    setTask([...task, newTask]);
    console.log(newTask);
  };

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  const onReminder = (id) => {
    setTask(
      task.map((task) =>
        task.id == id ? { ...task, reminder: task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onBtnClick={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={onAddTask} />}
      {task.length > 0 ? (
        <Tasks task={task} onDelete={deleteTask} onReminderClick={onReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;
