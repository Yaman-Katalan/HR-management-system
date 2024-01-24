// document.getElementById("submitBtn").addEventListener("click", addEmployee);

// function generateEmployeeId() {
//   return Math.floor(1000 + Math.random() * 1000);
// }

// function addEmployee() {
//   const fullName = document.getElementById("fullName").value;
//   const department = document.getElementById("department").value;
//   const level = document.getElementById("level").value;
//   const imageUrl = document.getElementById("imageUrl").value;
//   const employeeId = generateEmployeeId();

//   const employeeCard = document.createElement("div");
//   employeeCard.className = "employee-card";
//   employeeCard.innerHTML = `
//         <p>ID: ${employeeId}</p>
//         <p>Name: ${fullName}</p>
//         <p>Department: ${department}</p>
//         <p>Level: ${level}</p>
//         <img src="${imageUrl}">
//       `;

//   document.getElementById("employeeList").appendChild(employeeCard);
// }

document.getElementById("submitBtn").addEventListener("click", addEmployee);

function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 1000);
}

function addEmployee() {
  const fullName = document.getElementById("fullName").value;
  const department = document.getElementById("department").value;
  const level = document.getElementById("level").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const employeeId = generateEmployeeId();

  const employeeCard = document.createElement("div");
  employeeCard.className = "employee-card";
  employeeCard.innerHTML = `
    <img src="${imageUrl}" alt="Image">
    <p>ID: ${employeeId}</p>
    <p>Name: ${fullName}</p>
    <p>Department: ${department}</p>
    <p>Level: ${level}</p>
  `;

  document.getElementById("employeeList").apppreendChild(employeeCard);
}
