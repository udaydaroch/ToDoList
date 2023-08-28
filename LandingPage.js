const taskInputField = document.getElementById("taskName");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const allTable = document.getElementById("table");
const completedTaskTable= document.getElementById("table");
const incompleteTaskTable = document.getElementById("table");
const selectedElement = document.querySelector(".simple-filter");

selectedElement.addEventListener('change', function() {
  const selectedValue = selectedElement.value;
  toggleTable(selectedValue);
});

function toggleTable(selectedValue) {
  const tableOptions = ['table', 'incompletetasktable', 'completeTaskTable'];
  tableOptions.forEach(tableOption => {
    const table = document.getElementById(tableOption);
    if (tableOption === selectedValue) {
      table.style.display = 'table';
    } else {
      table.style.display = 'none';
    }
  });
}



function gettaskField() {
  if (startTime.value >= endTime.value) {
    alert("invalid start and end time");
  } else {
    const newRow = allTable.insertRow();
    const taskrow = newRow.insertCell(0);
    const DurationRow = newRow.insertCell(1);

    taskrow.innerHTML = " " + taskInputField.value;
    taskrow.classList.add("table-fond", "task-cell");

    const removetask = document.createElement("button");
    removetask.classList.add("RemoveButton-css");
    removetask.addEventListener("click", function() {
      allTable.deleteRow(newRow.rowIndex);
    });
    const checktask = document.createElement("button"); // Fixed typo here
    checktask.classList.add("checkTaskButton-css");
    removetask.textContent = "Remove";
    checktask.textContent = "task complete"; // Added semicolon

    DurationRow.innerHTML = startTime.value + " to " + endTime.value;
    DurationRow.appendChild(removetask);
    DurationRow.appendChild(checktask);
    DurationRow.classList.add("table-fond");
    checktask.classList.addEventListener("click", addTocompleted(checktask,taskrow.innerHTML,DurationRow.innerHTML));
  
  }
}
function addTocompleted(event,button,task,duration)
{
  const clickedButton = event.target;
  if (clickedButton = button); 
  {
  const newRow = completedTaskTable.insertRow();
  const taskrow = newRow.insertCell(0);
  const DurationRow = newRow.insertCell(1);
  taskrow.innerHTML = task;
  DurationRow.innerHTML = duration;
  }
}


