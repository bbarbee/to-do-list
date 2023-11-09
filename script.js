
/* give elements ids
*/

/*ADD TASKS
UPDATE/COMPLETE TASKS
READ TASKS
DELETE TASKS */

// create variables for elements

const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('toDoList');


//create a function to add user input to the toDoList when the click the add button

function userUpdatedToDoList(task) {
    let userUpdatedToDoList = document.getElementById('userUpdatedToDoList');
    let li = document.createElement('li');
    li.textContent = task;
    userUpdatedToDoList.appendChild(li);
}

function addTask(){
    let task = userInput.value.trim();//chat gpt suggestion
    if(userInput.value === ''){
        alert("It must be mice to have nothing to do!");
    }
    else{
        let li = document.createElement('li');
        li.textContent = task;
        toDoList.appendChild(li);
        userInput.value = '';
        userUpdatedToDoList(task);
    }

}