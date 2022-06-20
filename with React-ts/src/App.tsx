import React from "react";
import "./App.css";
import  Todo  from "./mycomponents/Todo";
import  Completed  from "./mycomponents/Completed";
import  Todos  from "./mycomponents/Todos";
import  Cancelled  from "./mycomponents/Cancelled";

type todos = {
  id: number,
  text: string,
  details: string,
  status: string
}

const App : React.FC = () =>  {
  const [todos, setTodos] = React.useState<todos[]>([]);
 
  return (
    <div id="todo-list">
      <Todo  todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
      <Completed todos={todos} />
      <Cancelled todos={todos} />
        
    </div>
  );
};

export default App;