import { useState } from "react";
import { Checked } from "../assets/Checked";
import { Unchecked } from "../assets/Unchecked";
import { Trash } from "../assets/Trash";

interface TaskPros {
  finished: boolean;
  task: string;
  id: string;
  changeFinishedStateOnTask: (id: string) => void;
  deleteTaskOnTaskList: (id: string) => void
}

export const Task = ({ finished, task, id, changeFinishedStateOnTask, deleteTaskOnTaskList }: TaskPros) => {
  function handleTaskState() {
    changeFinishedStateOnTask(id)
  }
  function handleDeleteTask(){
    deleteTaskOnTaskList(id)
  }

  return (
    <div className="flex items-start  p-4 gap-3 bg-gray-500 rounded-lg mb-3">
      <label htmlFor={id} className="group cursor-pointer">
        <input
          type="checkbox"
          name="task"
          id={id}
          className="hidden"
          checked={finished}
          onChange={handleTaskState}
        />
        {finished ? (
          <span>
            <Checked />
          </span>
        ) : (
          <span>
            <Unchecked />
          </span>
        )}
      </label>
      <span className={finished ? "text-gray-300 line-through w-full" : "text-gray-100  w-full"}>
        {task}
      </span>
      <span className="group cursor-pointer" onClick={handleDeleteTask}>
        <Trash />
      </span>
    </div>
  );
};
