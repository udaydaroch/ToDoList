const taskInputField = document.getElementById("taskName");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const table = document.getElementById("table");
let NumOfTasks = 1;

function gettaskField() {
  if (startTime.value >= endTime.value) {
    alert("invalid start and end time");
  } else {
    const newRow = table.insertRow();
    const taskrow = newRow.insertCell(0);
    const DurationRow = newRow.insertCell(1);

    taskrow.innerHTML = NumOfTasks++ + " " + taskInputField.value;
    taskrow.classList.add("table-fond", "task-cell");

    const removetask = document.createElement("button");
    removetask.classList.add("RemoveButton-css");
    const checktask = document.createElement("button"); // Fixed typo here
    checktask.classList.add("checkTaskButton-css");
    removetask.textContent = "Remove";
    checktask.textContent = "task complete"; // Added semicolon

    DurationRow.innerHTML = startTime.value + " to " + endTime.value;
    DurationRow.appendChild(removetask);
    DurationRow.appendChild(checktask);

    DurationRow.classList.add("table-fond");
  }
}
