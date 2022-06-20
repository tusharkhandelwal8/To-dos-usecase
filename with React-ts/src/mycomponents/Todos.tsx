import React  from 'react'

type task = {
  id: number,
  text: string,
  details: string,
  status: string
}

type tasks = {
  todos : task[] ,
  setTodos : React.Dispatch<React.SetStateAction<task[]>>;
}


function Todos(props : tasks) {
  function CompleteTodo(todo : task) {
    todo.status = "Completed";
    let updatedTodos = [...props.todos].filter((todo) => todo.status !== "NULL");
    props.setTodos(updatedTodos);
  }

  function CancelTodo(todo : task ) {
    todo.status = "Cancelled";
    let updatedTodos = [...props.todos].filter((todo) => todo.status !== "NULL");
    props.setTodos(updatedTodos);
  }

  function describeTodo(todo : task) {
    alert(todo.text + " :" + todo.status + "\n" + todo.details);
  }
  return (
    <div>
       <h1 id="todo">To-dos</h1>
       <div id="toDoContainer" >
       {props.todos.filter((todo) => todo.status === "Todo").map((todo) => <div key={todo.id}  >
         <div className="paragraph-styling" onClick={() => describeTodo(todo)}>{todo.text}</div> 
         <button onClick={() => CompleteTodo(todo)} className="small-styling">Complete</button>
         <button onClick={() => CancelTodo(todo)} className="small-styling">Cancel</button>
        </div> )}
       </div>  
    </div>
  )
}

export default Todos