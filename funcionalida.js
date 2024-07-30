const taskinput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const tasKList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
    const taskTex = taskinput.value.trim();
    if (taskTex.length!==''){
        const tasKListItem = document.createElement("LI");
        tasKListItem.textContent = taskText;
        tasKLis.appendChild(tasKListItem);
        taskinput.value = '';
    }
});