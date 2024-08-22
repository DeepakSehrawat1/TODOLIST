import { useState, useEffect } from "react";
import List from "./List";

const InputForm = () => {
  const [text, setText] = useState(" ");

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function HandleSubmit() {
    if (text.trim()) {
      setTasks([...tasks, text.trim()]);
      setText("");
    }
  }
  return (
    <>
      {" "}
      <div className=" flex justify-center p-4 mt-7">
        <input
          className=" w-[50%] px-2 mx-1 border-4 border-blue-400 py-2 "
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="bg-blue-100 text-black px-2 w-full sm:w-auto"
          onClick={HandleSubmit}
          type="submit"
        >
          schedule
        </button>
      </div>
      <ul className="mt-10">
        {tasks.map((item, index) => {
          return (
            <List
              key={index}
              listItem={item}
              itemIndex={index}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
      </ul>
    </>
  );
};

export default InputForm;
