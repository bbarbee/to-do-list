
/* give elements ids
*/

/*ADD TASKS
UPDATE/COMPLETE TASKS
READ TASKS
DELETE TASKS */

// create variables for elements

const userInput = document.getElementById("userInput")
const toDoList = document.getElementById("toDoList")

//create a function to add user input to the toDoList when the click the add button

function addTask(){
    if(userInput.value === ''){
        alert("It must be mice to have nothing to do!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = userInput.value;
        toDoList.appendChild(li);
    }

}