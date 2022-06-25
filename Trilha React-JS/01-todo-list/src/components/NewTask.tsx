import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { ITask } from "../interface/TaskInterface";
import {v4 as uuidv4} from 'uuid'

interface NewTaskProps{
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
}

const NewTask = ({setTaskList}: NewTaskProps) => {
  const [task, setTask] = useState("")

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    const newTask: ITask = {
      task,
      finished: false,
      id: uuidv4()
    }

    setTaskList(state => {
      return [...state, newTask]
    })
    setTask("")
  }

  function handleChangeNewTask({target}: ChangeEvent<HTMLInputElement>){
    setTask(target.value)
  }
  return (
    <form onSubmit={handleCreateNewTask} className="flex gap-2 justify-center mx-auto mt-[-1.9rem] w-full">
      <input
      required
        type="text"
        name="task"
        value={task}
        onChange={handleChangeNewTask}
        placeholder="Adicione uma nova tarefa"
        className="w-full p-4 bg-gray-500 rounded-lg placeholder:text-gray-300 border border-gray-700 outline-none focus:border-purple-dark"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 p-4 bg-blue-dark rounded-lg hover:bg-blue transition-colors"
      >
        <strong>Criar</strong>
        <PlusCircle weight="regular" size={16} className="text-gray-100 inline-block" />
      </button>
    </form>
  );
};

export default NewTask;
