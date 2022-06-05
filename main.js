let addToDoButton = document.getElementById('addbutton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let description = document.getElementById('description');
let completedContainer = document.getElementById('completedContainer');
let cancelledContainer = document.getElementById('cancelledContainer');

addToDoButton.addEventListener('click', function(){
	if(inputField.value==""){
		description.value="";
		alert("Please enter Task Title");
		return;
	}
	var newdiv = document.createElement('div');
    var paragraph = document.createElement('p');
	var b1 = document.createElement('button');
	var b2 = document.createElement('button');
    paragraph.classList.add('paragraph-styling');
	paragraph.classList.add('case1');
	b1.classList.add('small-styling');
	
	b2.classList.add('small-styling');
    paragraph.innerText = inputField.value;
	b1.innerText = "Completed";
	b2.innerText = "Cancel";
	newdiv.appendChild(paragraph);
	newdiv.appendChild(b1);
	newdiv.appendChild(b2);
    toDoContainer.appendChild(newdiv);
	let describe= description.value;
	let title = inputField.value;
	paragraph.addEventListener('click', function(){
		if(paragraph.classList.contains("case1")){
			alert(title + " : Todos" + "\n" + describe);
		}
		else if(paragraph.classList.contains("case2")){
			alert(title + " : Completed" + "\n" + describe);
		}
		else{	
		alert(title + " : Cancelled" + "\n" + describe);}
    })

	b1.addEventListener('click', function(){
		paragraph.classList.remove('case1');
		paragraph.classList.add('case2');
		completedContainer.appendChild(paragraph);
		toDoContainer.removeChild(newdiv);
		
    })
    b2.addEventListener('click', function(){
		paragraph.classList.remove('case1');
		paragraph.classList.add('case3');
		cancelledContainer.appendChild(paragraph);
        toDoContainer.removeChild(newdiv);
    })
    
	inputField.value = "";
	description.value = "";

})