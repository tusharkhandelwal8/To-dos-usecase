import React from 'react'

type task = {
  id: number,
  text: string,
  details: string,
  status: string
}

type tasks = {
  todos : task[] 
}


function Completed( props : tasks) {
  function describeTodo(todo : task) {
    alert(todo.text + " :" + todo.status + "\n" + todo.details);
  }

  return (
    <div>
       <h1 id="completed">Completed</h1>
        <div id="completedContainer" >
          {props.todos.filter((todo) => todo.status === "Completed").map((todo) => <div key={todo.id}  >
          <div className="paragraph-styling" onClick={() => describeTodo(todo)}>{todo.text}</div> 
          </div> )}
        </div>
    </div>
  )
}

export default Completed