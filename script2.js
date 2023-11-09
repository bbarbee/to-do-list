function addTask(){
    let userInput = document.getElementById('userInput');
    let task = userInput.value.trim();

    if(task === ''){
        alert("It must be nice to have nothing to do!");
    }
    else{
        // Add task to the original toDoList
        let toDoList = document.getElementById('toDoList');
        let li = document.createElement('li');
        li.textContent = task;
        toDoList.appendChild(li);

        // Display the task in the new toDoListDisplay
        let userUpdatedToDoList = document.getElementById('userUpdatedToDoList');
        let liDisplay = document.createElement('li');
        liDisplay.textContent = task;
        userUpdatedToDoList.appendChild(liDisplay);

        userInput.value = ''; // Clear the input field after adding a task
    }
}
