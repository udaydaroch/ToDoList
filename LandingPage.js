const taskInputField = document.getElementById("taskName");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const allTable = document.getElementById("table");
const selectedElement = document.querySelector(".simple-filter");
const userInfo = [];

selectedElement.addEventListener('change', function() {
  const selectedValue = selectedElement.value;
  toggleTable(selectedValue);
});

function toggleTable(selectedValue) {
  
  console.log(`Selected value: ${selectedValue}`);
  console.log("array",userInfo);
  for (let i = 0; i < allTable.rows.length; i++) {
    const taskRow = allTable.rows[i];
    const isHeaderRow = i === 0;
    const isCompleted = userInfo[i - 1] && userInfo[i- 1][2];
    console.log(isCompleted);
    if (!isHeaderRow) {
      if (
        (selectedValue === "completeTaskTable" && isCompleted === true) ||
        (selectedValue === "incompletetaskTable" && isCompleted === false) ||
        selectedValue == "table"
      ) {
        taskRow.style.display = "table-row";
      } else {
        taskRow.style.display = "none";
      }
    }
  }
}
function gettaskField() {
  if (startTime.value >= endTime.value) {
    alert("invalid start and end time");
  } else {
    const newRow = allTable.insertRow();
    const taskrow = newRow.insertCell(0);
    const DurationRow = newRow.insertCell(1);
    userInfo.push([taskInputField.value, startTime.value + " to " + endTime.value,false]);
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
    checktask.addEventListener("click", function()
    {
      console.log("Check task button clicked");
      addToCompleted(taskrow.innerHTML);
    });
    DurationRow.appendChild(removetask);
    DurationRow.appendChild(checktask);
    DurationRow.classList.add("table-fond");
    console.log("array",userInfo);
  }
}
function addToCompleted(taskrowContent) {
  for (let i = 0; i < allTable.rows.length; i++) {
    const taskRow = allTable.rows[i];
    const isHeaderRow = i === 0;
    const taskText = " "+taskRow.cells[0].textContent.trim();
    console.log(taskText);
    console.log(taskrowContent);
    if (!isHeaderRow && taskText === taskrowContent) {
      userInfo[i - 1][2] = true;
    }
  }
  console.log('array',userInfo);
}

