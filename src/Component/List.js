import { useState } from "react";
import {
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} from "../util/DropHandlingFn";

const List = ({ listItem, itemIndex, tasks, setTasks }) => {
  const [editIndx, setEditIndx] = useState(-1);
  const [editText, setEditText] = useState("");

  function deleteTask() {
    const tasks1 = tasks.filter((item, index1) => {
      return index1 != itemIndex;
    });

    setTasks(tasks1);
  }

  const handleEditTask = (index) => {
    setEditIndx(index);
    setEditText(tasks[index]);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndx ? editText.trim() : task
      );
      setTasks(updatedTasks);
      setEditIndx(-1);
      setEditText("");
    }
  };

  return (
    <li
      draggable
      onDragStart={() => handleDragStart(itemIndex)}
      onDragOver={() => handleDragOver(itemIndex, tasks, setTasks)}
      onDragEnd={() => handleDragEnd()}
      className="w-[70%] mx-auto py-2 my-2 border-2 border-blue-100 flex justify-between rounded-lg hover:bg-blue-200 flex-col sm:flex-row overflow-wrap"
    >
      {}
      {editIndx === itemIndex ? (
        <div className="flex-grow">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button
            onClick={() => {
              handleSaveEdit();
            }}
            className="bg-green-500 text-white p-2 rounded mt-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="font-bold text-2xl ml-2">{listItem}</div>
      )}
      <div>
        <span className="w-3/12 mx-2 sm:mx-4">
          {" "}
          <button
            onClick={() => {
              handleEditTask(itemIndex);
            }}
            className="p-2 bg-green-100 sm:p-4 "
          >
            Edit
          </button>
        </span>

        <span className="w-3/12 mx-2 sm:mx-4 ">
          {" "}
          <button
            className="p-2 bg-green-100 sm:p-4"
            onClick={() => {
              deleteTask();
            }}
          >
            Delete
          </button>
        </span>
      </div>
    </li>
  );
};

export default List;
