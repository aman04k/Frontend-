document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add task event
    addTaskBtn.addEventListener('click', addTask);

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create list item and add it to the list
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(taskSpan, editBtn));

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Function to edit a task
    function editTask(taskSpan, editBtn) {
        // Check if task is already being edited
        if (editBtn.textContent === 'Save') {
            taskSpan.textContent = taskSpan.querySelector('input').value;
            editBtn.textContent = 'Edit';
        } else {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = taskSpan.textContent;
            taskSpan.textContent = '';
            taskSpan.appendChild(inputField);
            editBtn.textContent = 'Save';
        }
    }
});
