import { useState } from "react";
import { Header } from "./components/Header";
import NewTask from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interface/TaskInterface";

interface ITaskList{
  task: string;
  finished: boolean;
}

export const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <>
      <Header />

      <main className="max-w-[46rem] mx-auto px-4">
        <NewTask setTaskList={setTaskList}/>
        <TaskList taskList={taskList} setTaskList={setTaskList}/>
      </main>
    </>
  );
};
