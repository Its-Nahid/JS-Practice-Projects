# Interactive To-Do List: Step-by-Step Guide

This guide is designed to help you build a To-Do List application by yourself, step-by-step. 

Try to write the JavaScript and CSS yourself using the instructions below. The complete solutions are hidden at the very bottom of this document behind spoiler tags and a large gap, so you won't see them unless you scroll down on purpose!

---

## Step 1: The HTML Structure (Start Here)
Create a file named `index.html` and copy this structure. This sets up the skeleton. Note the `id` names on the input, button, and list.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="todo-card">
    <h1>Task Manager</h1>
    
    <div class="input-container">
      <input type="text" id="taskInput" placeholder="Add a new task..." autocomplete="off">
      <button id="addTaskBtn">Add Task</button>
    </div>

    <!-- JavaScript will dynamically add <li> elements inside this <ul> -->
    <ul id="taskList"></ul>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

---

## Step 2: The JavaScript Plan (Write in `app.js`)
Try to translate these plain English steps into JavaScript code.

### Phase A: Grabbing HTML Elements
You need to tell JavaScript which elements to monitor or modify.
* **Goal**: Select `taskInput`, `addTaskBtn`, and `taskList` from the HTML using `document.getElementById()`. Store them in `const` variables.

### Phase B: Listen for the Click
* **Goal**: Add a `click` event listener to your "Add Task" button using `addEventListener('click', () => { ... })`.

### Phase C: The "Add Task" Logic (Inside the click event)
1. **Read the input**: Grab what the user typed by reading the `.value` property of your input variable. Use `.trim()` to remove extra spaces.
2. **Check if empty**: If the text is empty, display an `alert()` and use `return` to stop the function.
3. **Create the element**: Use `document.createElement('li')` to make a new list item container in memory.
4. **Set the content**: Use `.innerHTML` on the new `<li>` to insert a `<span>` containing the task text, and a `<button>` with the text "Delete". Give them classes like `task-text` and `delete-btn`.
5. **Add interactivity to the new list item**:
   * Grab the `<span>` inside the new `<li>` and add a click listener to it that toggles a class name (e.g., `completed`).
   * Grab the `<button>` inside the new `<li>` and add a click listener to it that calls `li.remove()` to delete the item.
6. **Show it on the page**: Append your newly created `<li>` to the `taskList` using `.appendChild()`.
7. **Reset the input**: Set the input's `.value` back to `""` and call `.focus()` on it so the cursor stays inside the input box.

---

## Step 3: The Styling Plan (Write in `style.css`)
Before looking at the answer, try styling it yourself:
* Give the body a nice background color or gradient.
* Center the `.todo-card` on the page.
* Set `.task-text` to have `cursor: pointer`.
* **Crucial Rule**: Define a `.completed` class that applies `text-decoration: line-through;` and changes the color to gray.

---

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

# 🛑 SPOILER WARNING: SOLUTIONS BELOW

Scroll down only if you are stuck or want to check your answers!

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## Complete JavaScript Solution (`app.js`)

```javascript
// 1. Grab elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// 2. Add click listener to the button
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Guard clause: stop if input is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // 3. Create a new list item
  const li = document.createElement("li");

  // 4. Fill list item with structure
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // 5. Add functionality to elements inside the new list item
  const textSpan = li.querySelector(".task-text");
  textSpan.addEventListener("click", () => {
    textSpan.classList.toggle("completed");
  });

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // 6. Put the list item into the list container on the page
  taskList.appendChild(li);

  // 7. Clear the input
  taskInput.value = "";
  taskInput.focus();
});
```

---

## Complete CSS Solution (`style.css`)

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 350px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  outline: none;
}

button {
  padding: 10px 15px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #5a67d8;
}

ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7fafc;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  border: 1px solid #edf2f7;
}

.task-text {
  cursor: pointer;
  flex: 1;
}

.completed {
  text-decoration: line-through;
  color: #a0aec0;
}

.delete-btn {
  background-color: #e53e3e;
  padding: 5px 10px;
  font-size: 13px;
}

.delete-btn:hover {
  background-color: #c53030;
}
```
