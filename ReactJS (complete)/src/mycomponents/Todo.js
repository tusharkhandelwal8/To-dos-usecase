import React from 'react'

function Todo() {
  const [todo , settodo] = React.useState("");
  return (
    <div className="container" id="box">
      <div id="crbox4"></div>
      <div id="crbox"></div>
      <div id="crbox1"></div>
      <div id="crbox2"></div>
      <div id="crbox3"></div>
			<h1 id="top">Add Task</h1>
			<h2 id="title">Title :</h2>
			<input id="inputField" type="text" onChange={(e) => settodo(e.target.value)} value={todo} />
			<h2 id="title2">Description : </h2>
			<input id="description" type="text" />
			<button id="addbutton">Create</button>
    </div > 
  )
}

export default Todo