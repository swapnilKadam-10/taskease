import { useEffect } from "react";

const TaskList = ({ taskList, setTasklist, task, setTask }) => {
  const handleDelete = (id) => {
    const updatedTask = taskList.filter((task) => task.id !== id);
    setTasklist(updatedTask);
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="flex flex-col  justify-between bg-white max-w-5xl  border m-auto mt-10  p-5 rounded-lg  shadow-md dark:bg-slate-600 ">
      <div className="flex   justify-between">
        <div className=" flex flex-row">
          <h1 className="text-lg text-slate-900 text-center font-bold font-serif dark:text-white">
            ToDo
          </h1>
          <span className="ml-5 px-3 rounded-full bg-slate-300">
            {taskList.length}
          </span>
        </div>

        <button
          className="bg-blue-600 px-3 py-1 rounded-lg text-white "
          onClick={() => setTasklist([])}
        >
          Clear All
        </button>
      </div>

      <ul className="flex justify-between flex-wrap mt-10">
        {taskList.map((todo) => (
          <li
            key={todo.id}
            className="border w-[600px] lg:w-[480px] p-3 ml-0 border-l-8 border-l-orange-500 rounded-lg my-2 shadow-md dark:bg-slate-200 dark:text-black"
          >
            <p className="flex justify-between">
              <span className=" text-lg">{todo.name}</span>
              <span>
                <i
                  onClick={() => handleEdit(todo.id)}
                  className=" bi-pencil-square"
                ></i>
                <i
                  onClick={() => handleDelete(todo.id)}
                  className=" bi-trash delete"
                ></i>
              </span>
            </p>
            <span className="flex text-xs mt-2">{todo.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
