const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasksFromStorage);

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  } else {
    alert('Lütfen bir görev girin!');
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    } else {
      alert('Lütfen bir görev girin!');
    }
  }
});

function addTask(text, completed = false) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  if (completed) {
    span.classList.add('completed');
  }

  span.addEventListener('click', () => {
    span.classList.toggle('completed');
    li.classList.toggle('completed');
    saveTasksToStorage();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasksToStorage();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  if (completed) {
    li.classList.add('completed');
  }

  taskList.appendChild(li);
  saveTasksToStorage();
}

function saveTasksToStorage() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.querySelector('span').classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromStorage() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(task => addTask(task.text, task.completed));
  }
}
