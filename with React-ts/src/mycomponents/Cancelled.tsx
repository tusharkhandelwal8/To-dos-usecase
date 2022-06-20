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


function Cancelled(props : tasks) {
  function describeTodo(todo : task) {
    alert(todo.text + " :" + todo.status + "\n" + todo.details);
  }

  return (
    <div>
       <h1 id="cancelled">Cancelled</h1>
        <div id="cancelledContainer">
        {props.todos.filter((todo) => todo.status === "Cancelled").map((todo) => <div key={todo.id} >
         <div className="paragraph-styling" onClick={() => describeTodo(todo)}>{todo.text}</div> 
        </div> )}
        </div>
    </div>
  )
}

export default Cancelled
