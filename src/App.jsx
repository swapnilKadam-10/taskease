import { useState, useEffect } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [taskList, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  const [task, setTask] = useState({});
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AddTask
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <TaskList
          taskList={taskList}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
