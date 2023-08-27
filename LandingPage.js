const taskInputField = document.getElementById("taskName")
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const table = document.getElementById("table");


function gettaskField() {
  console.log("triggered");
  
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
    DurationRow.innerHTML = startTime.value + "to" + endTime.value;
    deleteRow.innerHTML = "delete task";

  }
}