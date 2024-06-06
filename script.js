document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      const task = taskInput.value.trim();
  
      if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          addButton.click();
        }
      });
    });