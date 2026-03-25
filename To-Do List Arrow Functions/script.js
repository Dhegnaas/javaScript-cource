const tasks = [];

// Add Task
const addTask = () => {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  tasks.push(task);
  input.value = "";

  showTasks();
};

// Show Tasks
const showTasks = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
};

// Delete Task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  showTasks();
};