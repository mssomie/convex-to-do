"use client"

import {useState} from "react";
import { NewTodoForm } from "./_components/new-to-do-form";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {

  const [todos, setTodos] = useState<ToDoItem[]>([
    {title: "Example", description: "This is an example", completed: false}
  ]);
  

  

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-xl font-bold">To-do List</h1>
      <ul>
        {todos.map(({ title, description, completed }, index)=>(
          <ToDoItem
          title={title} 
          description={description} 
          completed ={completed}
          onCompleteChanged={(newValue)=>{
            setTodos(prev=>{
            const newTodos = [...prev];
            newTodos[index].completed = newValue;
            return newTodos;
          })
        }}
          />
          
        ))}
      </ul>
      <NewTodoForm onCreate={(title, description)=>{
        setTodos(prev =>{
          const newTodos = [...prev];
          newTodos.push({title, description, completed: false});
          return newTodos;
        });
      }}/>
     

    </div>
  );
}

function ToDoItem({title, description, completed, onCompleteChanged}: {
  title: string; 
  description: string; 
  completed: boolean; 
  onCompleteChanged: (newValue: boolean) => void }){
    return(
      <li>
            <input 
              type="checkbox" 
              checked={completed} 
              onChange ={e=>onCompleteChanged(e.target.checked)}/>
            <span className="font-semibold">{title}</span> {description}
      </li>
    )
  }