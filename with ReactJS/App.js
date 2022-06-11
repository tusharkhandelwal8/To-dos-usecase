import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [completed, setcompleted] = React.useState([]);
  const [cancelled, setcancelled] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      details: description,
    };

    if(newTodo.text==="") {
      alert("Enter Task Title");
      setdescription("");
      return;
    }
    
    setTodos([...todos].concat(newTodo));
    setTodo("");
    setdescription("");
  }

  function CompleteTodo(id,todo) {
    setcompleted([...completed].concat(todo));
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function CancelTodo(id,todo) {
    setcancelled([...cancelled].concat(todo));
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function describeTodo(id,todo) {
    alert(todo.text + " : Todo\n" + todo.details);
  }

  function describecompleted(id,todo) {
    alert(todo.text + " : Completed\n" + todo.details);
  }

  function describecancelled(id,todo) {
    alert(todo.text + " : Cancelled\n" + todo.details);
  }


  return (
    <div id="todo-list">
    
      <form onSubmit={handleSubmit} className="container" id="box">
        <div id="crbox4"></div>
        <div id="crbox"></div>
        <div id="crbox1"></div>
        <div id="crbox2"></div>
        <div id="crbox3"></div>
        <h1 id="top">Add Task</h1>
        <h2 id="title">Title :</h2>
        <input type="text" id="inputField" onChange={(e) => setTodo(e.target.value)} value={todo}  />
        <h2 id="title2">Description : </h2>
        <input id="description" type="text" onChange={(e) => setdescription(e.target.value)} value={description}  />
        <button type="submit" id="addbutton">Create</button>
      </form>

      <h1 id="todo">To-dos</h1>
       <div id="toDoContainer" >
       {todos.map((todo) => <div key={todo.id}  >
         <div className="paragraph-styling" onClick={() => describeTodo(todo.id,todo)}>{todo.text}</div> 
         <button onClick={() => CompleteTodo(todo.id,todo)} className="small-styling">Complete</button>
         <button onClick={() => CancelTodo(todo.id,todo)} className="small-styling">Cancel</button>
        </div> )}
       </div>  

        <h1 id="completed">Completed</h1>
        <div id="completedContainer" >
          {completed.map((todo) => <div key={todo.id}  >
          <div className="paragraph-styling" onClick={() => describecompleted(todo.id,todo)}>{todo.text}</div> 
          </div> )}
        </div>
       

        <h1 id="cancelled">Cancelled</h1>
        <div id="cancelledContainer">
        {cancelled.map((todo) => <div key={todo.id} >
         <div className="paragraph-styling" onClick={() => describecancelled(todo.id,todo)}>{todo.text}</div> 
        </div> )}
        </div>
        
    </div>
  );
};

export default App;