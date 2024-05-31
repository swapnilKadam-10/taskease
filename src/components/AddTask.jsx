import { useState } from "react";

const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const [isempty, setEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.task.value === "") {
      setEmpty(true);
    } else {
      if (task.id) {
        const date = new Date();
        const updatedTask = taskList.map((todo) =>
          todo.id === task.id
            ? {
                id: task.id,
                name: task.name,
                time:
                  date.toLocaleDateString() + " " + date.toLocaleTimeString(),
              }
            : todo
        );

        setTasklist(updatedTask);
        setTask({});
        setEmpty(false);
      } else {
        const date = new Date();
        const task = {
          id: Math.floor(Math.random() * 100000),
          name: e.target.task.value,
          time: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
        };

        setTasklist([...taskList, task]);
        setTask({});
        setEmpty(false);
      }
    }
  };

  return (
    <section className="max-w-lg bg-white border m-auto h-24  py-5 mt-10 rounded-2xl  justify-center shadow-lg  dark:bg-slate-700 dark:text-grey-600">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder=" add task"
          autoComplete="off"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="border h-9 sm:w-80 rounded-md dark:bg-slate-500 dark:text-white"
        />
        <button className="border ml-3 px-6 py-1 rounded-md bg-emerald-700 text-white text-lg ">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
      <div className="flex flex-col">
        {isempty ? (
          <p className="text-sm text-yellow-400 ">
            *Please enter the valid data.
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default AddTask;
