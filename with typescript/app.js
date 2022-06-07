document.getElementById('addbutton').addEventListener('click', function () {
    var toDoContainer = document.getElementById('toDoContainer');
    var inputField = document.getElementById('inputField');
    var description = document.getElementById('description');
    var completedContainer = document.getElementById('completedContainer');
    var cancelledContainer = document.getElementById('cancelledContainer');
    if (inputField.value == "") {
        description.value = "";
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
    var describe = description.value;
    var title = inputField.value;
    function print_container(title, container, describe) {
        alert(title + container + describe);
    }
    paragraph.addEventListener('click', function () {
        if (paragraph.classList.contains("case1")) {
            print_container(title, " : Todos" + "\n", describe);
        }
        else if (paragraph.classList.contains("case2")) {
            print_container(title, " : Completed" + "\n", describe);
        }
        else {
            print_container(title, " : Cancelled" + "\n", describe);
        }
    });
    b1.addEventListener('click', function () {
        if (paragraph.classList.contains("case1"))
            paragraph.classList.remove('case1');
        paragraph.classList.add('case2');
        completedContainer.appendChild(paragraph);
        toDoContainer.removeChild(newdiv);
    });
    b2.addEventListener('click', function () {
        if (paragraph.classList.contains("case1"))
            paragraph.classList.remove('case1');
        paragraph.classList.add('case3');
        cancelledContainer.appendChild(paragraph);
        toDoContainer.removeChild(newdiv);
    });
    inputField.value = "";
    description.value = "";
});
