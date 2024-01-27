// localStorage.setItem()
// localStorage.getItem()
// localStorage.key(0)
//
// JSON.stringify()
// JSON.parse()
// -__________________
// Object.keys(objName).length

let allArray = [];
// arr1: Adminstration , arr2: Marketing
// arr3: Development , arr4: Finance
let arr1, arr2, arr3, arr4;
arr1 = [];
arr2 = [];
arr3 = [];
arr4 = [];
//
let salary1 = 0,
  salary2 = 0,
  salary3 = 0,
  salary4 = 0;

for (let i = 0; i < Object.keys(localStorage).length; i++) {
  allArray.push(JSON.parse(localStorage[localStorage.key(i)]));
  //
  if (allArray[i].department === "Administration") {
    arr1.push(allArray[i]);
    salary1 += allArray[i].salary;
  } else if (allArray[i].department === "Marketing") {
    arr2.push(allArray[i]);
    salary2 += allArray[i].salary;
  } else if (allArray[i].department === "Development") {
    arr3.push(allArray[i]);
    salary3 += allArray[i].salary;
  } else if (allArray[i].department === "Finance") {
    arr4.push(allArray[i]);
    salary4 += allArray[i].salary;
  }
}
//

// Render Information Into Table
for (let i = 1; i <= 4; i++) {
  let xArray = [];
  let xSalary = 0;
  if (i === 1) {
    xArray = arr1;
    xSalary = salary1;
  } else if (i === 2) {
    xArray = arr2;
    xSalary = salary2;
  } else if (i === 3) {
    xArray = arr3;
    xSalary = salary3;
  } else if (i === 4) {
    xArray = arr4;
    xSalary = salary4;
  }
  //
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  let cell4 = document.createElement("td");
  //
  cell1.textContent = `${xArray[0].department}`;
  cell2.textContent = `${xArray.length}`;
  cell3.textContent = `${xSalary}`;
  cell4.textContent = `${xSalary / xArray.length}`;
  //
  row.append(cell1);
  row.append(cell2);
  row.append(cell3);
  row.append(cell4);
  //
  document.getElementById("tableBody").append(row);
}
//
// Total Row in Table
let row = document.createElement("tr");
let cell1 = document.createElement("td");
let cell2 = document.createElement("td");
let cell3 = document.createElement("td");
let cell4 = document.createElement("td");
//
cell1.textContent = `Total`;
cell2.textContent = `${allArray.length}`;
cell3.textContent = `${salary1 + salary2 + salary3 + salary4}`;
cell4.textContent = `${
  (salary1 + salary2 + salary3 + salary4) / allArray.length
}`;
//
row.append(cell1);
row.append(cell2);
row.append(cell3);
row.append(cell4);
//
document.getElementById("tableBody").append(row);
