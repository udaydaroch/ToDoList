const taskInputField = document.getElementById("taskName")
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const table = document.getElementById("table");


function gettaskField() {
  
  if (startTime.value >= endTime.value)
  {
    alert("invalid start and end time");
  }
  else {
    
    const newRow = table.insertRow();
    const taskrow = newRow.insertCell(0);
    const DurationRow = newRow.insertCell(1);
    const deleteRow = newRow.insertCell(2);

    taskrow.innerHTML = taskInputField.value;
    taskrow.classList.add("table-fond");

    DurationRow.innerHTML = startTime.value + " to " + endTime.value;
    DurationRow.classList.add("table-fond");

    deleteRow.innerHTML = "delete task";
    deleteRow.classList.add("table-fond");
    
    
  }
}