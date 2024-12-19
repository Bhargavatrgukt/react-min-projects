import React, { useState } from "react";
import Button from "../Button/Button";
import Task from "../Task/Task";

const Body = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Tracks whether we're editing
  const [editIndex, setEditIndex] = useState(null); // Tracks the index of the task being edited

  const handleInputTask = (event) => {
    setValue(event.target.value);
  };

  const appendOrUpdateTask = (event) => {
    event.preventDefault();

    if (isEditing) {
      // Update task logic
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? value.trim() : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Append task logic
      if (value.trim() !== "") {
        setTasks((prev) => [...prev, value.trim()]);
      }
    }

    setValue(""); // Clear the input field after adding/updating
  };

  const clearTheInput = () => {
    setValue("");
    setIsEditing(false); // Reset editing state
    setEditIndex(null);
  };

  const editTask = (task, index) => {
    setValue(task);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteTask = (indexToRemove) => {
    setTasks((taskList) =>
      taskList.filter((_, index) => index !== indexToRemove)
    );
  };

  const isDisabled = value.trim() === "" && !isEditing; // Disable only when adding an empty task

  return (
    <div className="mt-4 pt-4 flex flex-col justify-center items-center w-full">
      <form className="w-full max-w-md" onSubmit={appendOrUpdateTask}>
        <input
          type="text"
          placeholder="Enter your todo"
          className="w-full p-2 mb-4 rounded-md border border-black"
          onChange={handleInputTask}
          value={value}
        />
        <div className="flex">
          <Button
            value={isEditing ? "Update" : "Submit"}
            handleButton={appendOrUpdateTask}
            isDisabled={isDisabled}
          />
          <Button
            value="Cancel"
            handleButton={clearTheInput}
            isDisabled={!isEditing && isDisabled}
          />
        </div>
      </form>
      <p className="mt-4 italic text-gray-600">
        Double-click a todo to toggle its completion status.
      </p>
      <ul className="list-none w-full max-w-md">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            editTask={() => editTask(task, index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Body;
