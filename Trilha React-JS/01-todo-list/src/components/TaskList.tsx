import { useState } from "react";
import clipboard from "../assets/clipboard.png";
import { ITask } from "../interface/TaskInterface";
import { Task } from "./Task";

interface TaskListProps {
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskList = ({ taskList, setTaskList }: TaskListProps) => {
  const taskListIsEmpty = taskList.length > 0;
  const createdTasks = taskList.length;
  let finishedTasks = 0;

  taskList.forEach((task) => task.finished === true && finishedTasks++);

  function changeFinishedStateOnTask(id: string) {
    const newTaskList = [...taskList];

    newTaskList.forEach((task) => {
      if (task.id === id) {
        task.finished = !task.finished;
      }
    });

    setTaskList(newTaskList);
  }

  function deleteTaskOnTaskList(id:string){
    setTaskList(state => {
      return state.filter(task => task.id !== id)
    })
  } 
  return (
    <div className="mt-16">
      <header className="flex justify-between mb-6">
        <strong className="text-blue flex gap-2 justify-center items-center">
          Tarefas criadas
          <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full">{createdTasks}</span>
        </strong>

        <strong className="text-purple flex gap-2 justify-center items-center">
          Concluídas
          <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full">
            {createdTasks > 0 ? `${finishedTasks} de ${createdTasks}` : "0"}
          </span>
        </strong>
      </header>

      {taskListIsEmpty ? (
        <div>
          {taskList.map((task) => {
            return (
              <Task
                key={task.id}
                task={task.task}
                finished={task.finished}
                id={task.id}
                changeFinishedStateOnTask={changeFinishedStateOnTask}
                deleteTaskOnTaskList={deleteTaskOnTaskList}
              />
            );
          })}
        </div>
      ) : (
        <div className="py-16 px-6 mt-6 flex flex-col items-center justify-center border-t border-gray-400 rounded-lg">
          <img src={clipboard} alt="Prancheta" />

          <div className="text-gray-300 leading-[140%] mt-4">
            <strong className="block">Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
    </div>
  );
};
