const container = document.querySelector('.todo-container'); // Container that contains the todo-items
var inputValueDescription = document.querySelector('.inputDescription'); // The description of the todo-item
var inputValueDeadline = document.querySelector('.inputDeadline'); // The description of the todo-item
const add = document.querySelector('.add'); // add button

let todoList = []; // Contains all the todo-items

class item{
    
    // Class representing one todo item with a description and a deadline
	constructor(description, deadline){
		this.createItem(description, deadline);
	}

    
    createItem(description, deadline){

        // Create the HTML of todo and fill with description and deadline
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
    	remove.classList.add('m-1', 'btn','btn-md','btn-danger');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, description, deadline));

        container.appendChild(itemBox);

        itemBox.appendChild(div);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

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
    }


    // Edit and Remove Button
    edit(input, date,  description){
        if(input.disabled == true || date.disabled == true){
           input.disabled = !input.disabled;
           date.disabled = !date.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            date.disabled = !date.disabled;
        }
    }

    remove(itemBox, description, deadline){
        // Functionality Delete Button

        // Remove todo from database
        // TODO: Not working. Request blocked due to 'CORS Header missing'
        var http = new XMLHttpRequest();
        var url = 'http://localhost:8086/deleteTodo';
        http.open('DEL', url, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify({"description" :  description, "progress" : 0, "done" : false, "date" : deadline}));

        // Remove todo from list
        todoList.splice(todoList.indexOf(description), 1)

        // Remove todo from page
        itemBox.parentNode.removeChild(itemBox);

        // console.log(todoList);
    }
}

add.addEventListener('click', check);
function check(){
	if(inputValueDescription.value != "" && inputValueDeadline.value != ""){
		new item(inputValueDescription.value, inputValueDeadline.value);
        inputValueDescription.value = "";
        inputValueDeadline.value = "";
	}
}

