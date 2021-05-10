const container = document.querySelector('.todo-container'); // Container that contains the todo-items
var inputValueDescription = document.querySelector('.inputDescription'); // The description of the todo-item
var inputValueDeadline = document.querySelector('.inputDeadline'); // The description of the todo-item
const add = document.querySelector('.add'); // add button

// Those 3 lists are needed to correctly of items in the frontend and database and also for correct adding/deleting
var todoList = []; // Will hold todo-items received by backend
var descriptions = []; // Will hold descriptions of each received todo-item
var ids = []; // Will hold ids of each received todo-item


window.onload = function() {
    // Get todos from database when window is loaded
    // Display them on screen
    var http = new XMLHttpRequest();
    var url = 'http://localhost:8086/getTodos';

    http.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            todoList = JSON.parse(this.responseText);
            todoList.forEach(element => {
                descriptions.push(element.description);
                ids.push(element.id);
                new item(element.description, element.deadline);
            });
        }
    };
    http.open('GET', url, true);
    http.send();
}

class item {
    // Class representing one todo item with a description and a deadline
    constructor(description, deadline, ) {
        this.createItem(description, deadline);
    }
    createItem(description, deadline) {

        // Create the HTML of the todo-item and fill it with the entered description and deadline
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var div = document.createElement('div');
        div.classList.add('todo-item');

        var input = document.createElement('input');
        var date = document.createElement('input');

        input.type = "text";
        input.disabled = true;
        input.value = description;
        input.classList.add('item_input');
        div.appendChild(input);

        date.type = "date";
        date.classList.add('todo-deadline');
        date.disabled = true;
        date.value = deadline;
        date.classList.add('item_input');
        div.appendChild(date);

        // Create Edit and Delete Button
        var edit = document.createElement('button');
        edit.classList.add('m-1', 'btn', 'btn-md', 'btn-info');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, date, description));

        var remove = document.createElement('button');
        remove.classList.add('m-1', 'btn', 'btn-md', 'btn-danger');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, description, deadline, descriptions, ids));

        container.appendChild(itemBox);

        itemBox.appendChild(div);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

<<<<<<< HEAD
        // Add to database
        addItemToDatabase(description, deadline, descriptions);
=======
         // Add todo to database
        var http = new XMLHttpRequest();
        var url = 'http://localhost:8086/addTodo';
        http.open('POST', url, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify({
            "description" : description,
            "progress" : 0,
            "done" : false,
            "date" : deadline}));
        
        // Add todo to list
        todoList.push(description);

        console.log(todoList);
>>>>>>> 38049f5e71b66bb05f87534dea0a4747ef8ddf2c
    }

    // Edit and Remove Button
    edit(input, date, description) {
        if (input.disabled == true || date.disabled == true) {
            input.disabled = !input.disabled;
            date.disabled = !date.disabled;
        } else {
            input.disabled = !input.disabled;
            date.disabled = !date.disabled;
        }
    }
    remove(itemBox, description, deadline) {
        // Functionality of delete Button
        // Remove todo from database
        var descriptions = [];
        var ids = [];
        var http2 = new XMLHttpRequest();
        var url = 'http://localhost:8086/getTodos';

        // 1) Get current information
        http2.onreadystatechange = function() {
            if (this.readyState != 4) return;
            if (this.status == 200) {
                var todoList = JSON.parse(this.responseText);
                todoList.forEach(element => {
                    console.log("CUR IS ", element.description, "AND ID IS ", element.id);
                    descriptions.push(element.description);
                    ids.push(element.id);
                });
                // 2) Use received info to get the correct ID of the item that we want to delete
                var index = descriptions.indexOf(description, 0);
                var id = ids[index]
                var http = new XMLHttpRequest();
                var url = 'http://localhost:8086/deleteTodo';

                // 3) Send HTTP requests
                http.onreadystatechange = function() {
                    if (this.readyState != 4) return;
                    if (this.status == 200) {
                        console.log(http.responseText);
                    }
                };
                http.open('DELETE', url, true);
                http.setRequestHeader("Content-Type", "application/json");
                http.send((JSON.stringify({
                    "id": id,
                    "description": description,
                    "progress": 0,
                    "done": false,
                    "deadline": deadline
                })));

                // Remove todo from page
                itemBox.parentNode.removeChild(itemBox);
            }
        };
        http2.open('GET', url, true);
        http2.send();

        // console.log("Delete body was: ", JSON.stringify({"id" : id, "description" : description, "progress" : 0, "done" : false, "deadline" : deadline}));
        // console.log("descriptions is ", descriptions, "and ids is ", ids);
    }
}

add.addEventListener('click', check);

function check() {
    if (inputValueDescription.value != "" && inputValueDeadline.value != "") {
        new item(inputValueDescription.value, inputValueDeadline.value);
        inputValueDescription.value = "";
        inputValueDeadline.value = "";
    }
}

function addItemToDatabase(text, date, descriptions) {
    if (!descriptions.includes(text) || descriptions.length == 0) {
        var http = new XMLHttpRequest();
        var url = 'http://localhost:8086/addTodo';
        http.open('POST', url, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify({
            "description": text,
            "progress": 0,
            "done": false,
            "deadline": date
        }));
    } else {
        //console.log("Element not added because it already exists");
    }
}