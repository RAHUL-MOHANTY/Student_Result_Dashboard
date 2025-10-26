function getGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else return "F";
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const marks = document.getElementById("marks").value.trim();

  if (name === "" || marks === "") {
    alert("Please enter both name and marks!");
    return;
  }

  if (marks < 0 || marks > 100) {
    alert("Marks should be between 0 and 100!");
    return;
  }

  const grade = getGrade(marks);

  const table = document.getElementById("resultTable");
  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = marks;
  row.insertCell(2).innerText = grade;

  document.getElementById("name").value = "";
  document.getElementById("marks").value = "";
}
