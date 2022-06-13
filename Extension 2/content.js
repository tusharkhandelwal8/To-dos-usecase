var bt = document.createElement('button');
bt.innerText = "Submit";
bt.classList.add('addbutton2');
let body = document.getElementById('todo-list');
body.appendChild(bt);
let dbt = document.getElementById('addbutton');
dbt.remove();
let ip = document.getElementById('inputField');
ip.remove();
let dsc = document.getElementById('description');
dsc.remove();
let ip1 = document.createElement('input');
let dsc1 = document.createElement('input');
ip1.setAttribute('id','inputField');
dsc1.setAttribute('id','description');
ip1.setAttribute('type','text');
dsc1.setAttribute('type','text');
body.appendChild(ip1);
body.appendChild(dsc1);

var n1 = document.createElement('p');
var n2 = document.createElement('p');
var n3 = document.createElement('p');
n1.setAttribute('id','n1');
n2.setAttribute('id','n2');
n3.setAttribute('id','n3');
n1.innerText = '0';
n2.innerText = '0';
n3.innerText = '0';
body.appendChild(n1);
body.appendChild(n2);
body.appendChild(n3);



let addToDoButton = bt;
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
	var b3 = document.createElement('button');
    paragraph.classList.add('paragraph-styling');
	paragraph.classList.add('case1');
	b1.classList.add('small-styling');
	b2.classList.add('small-styling');
	b3.classList.add('small-styling');
    paragraph.innerText = inputField.value;
	b1.innerText = "Complete";
	b2.innerText = "Cancel";
	b3.innerText = "Delete";
	newdiv.appendChild(paragraph);
	newdiv.appendChild(b1);
	newdiv.appendChild(b2);
	newdiv.appendChild(b3);
    toDoContainer.appendChild(newdiv);
	let describe= description.value;
	let title = inputField.value;
	document.getElementById("n1").innerText = (parseInt(document.getElementById("n1").innerText)+1).toString();
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
        document.getElementById("n1").innerText = (parseInt(document.getElementById("n1").innerText)-1).toString();
        document.getElementById("n2").innerText = (parseInt(document.getElementById("n2").innerText)+1).toString();
		completedContainer.appendChild(paragraph);
		toDoContainer.removeChild(newdiv);
		
    })
    b2.addEventListener('click', function(){
		paragraph.classList.remove('case1');
		paragraph.classList.add('case3');
		document.getElementById("n1").innerText = (parseInt(document.getElementById("n1").innerText)-1).toString();
        document.getElementById("n3").innerText = (parseInt(document.getElementById("n3").innerText)+1).toString();
		cancelledContainer.appendChild(paragraph);
        toDoContainer.removeChild(newdiv);
    })

	b3.addEventListener('click', function(){
        document.getElementById("n1").innerText = (parseInt(document.getElementById("n1").innerText)-1).toString();
        toDoContainer.removeChild(newdiv);
    })
    
	inputField.value = "";
	description.value = "";

})
