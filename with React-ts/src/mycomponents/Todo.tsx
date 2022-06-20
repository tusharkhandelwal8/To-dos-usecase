import React  from "react";

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



const App = (props : tasks) => {
  const [todo, setTodo] = React.useState("");
  const [description, setdescription] = React.useState("");

  function handleSubmit(event : React.MouseEvent<HTMLFormElement> ) {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      details: description,
      status: "Todo",
    };

    if(newTodo.text==="") {
      alert("Enter Task Title");
      setdescription("");
      return;
    }
    
    props.setTodos([...props.todos].concat(newTodo));
    setTodo("");
    setdescription("");
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
        <input type="text" id="inputField" autoComplete="off" onChange={(e) => setTodo(e.target.value)} value={todo}  />
        <h2 id="title2">Description : </h2>
        <input id="description" type="text" autoComplete="off" onChange={(e) => setdescription(e.target.value)} value={description}  />
        <button type="submit" id="addbutton">Create</button>
      </form>
        
    </div>
  );
};

export default App;