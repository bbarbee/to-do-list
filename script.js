
/* give elements ids
*/

/*ADD TASKS
UPDATE/COMPLETE TASKS
READ TASKS
DELETE TASKS */

const addButton = document.getElementById('addButton');
const userInput = document.getElementById('userInput');
const toDoList = document.getElementById('toDoList');

// Add an event listener to the add button
addButton.addEventListener('click', addTask);

function addTask() {
    // Get the user input
    let taskText = userInput.value.trim();

    // Check if the user input is not empty
    if (taskText) {
        // Create a new list item
        let li = document.createElement('li');
        li.textContent = taskText;

        //Add a button to remove li from the to do list
        let removeButton= document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('removeButtons');

        removeButton.addEventListener('click', function() {
            li.remove();
        }
        )

        li.appendChild(removeButton);

        // Add the list item to the to-do list
        toDoList.appendChild(li);

        userInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}

//create a function to complete the task