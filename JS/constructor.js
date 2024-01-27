"use strict";

// function constructorName >> capital and singular
// Make a blueprint = (the constructor)
// first char is capital means it's a constructor not a normal function

// ____________
let arr = [];
// ____________

function Employee(id, name, dep, lev, img, cls) {
  this.employeeId = id;
  this.fullName = name;
  this.department = dep;
  this.level = lev;
  this.imgURL = img;
  this.boxClass = cls;
  this.salaryValue();
  this.renderEmployee();
  // _______________________________ //
  arr.push(this);
  //
  // Move to Local Storage
  for (let i = 0; i < arr.length; i++) {
    localStorage.setItem(`ID: ${arr[i].employeeId}`, JSON.stringify(arr[i]));
  }
}

Employee.prototype.renderEmployee = function () {
  // render static boxes
  // for (let i = 0; i < arr.length; i++) {}
  let x = document.createElement("div");
  let y = document.createElement("img");
  y.setAttribute("src", this.imgURL);
  y.setAttribute("alt", "No IMG");
  x.append(y);
  x.classList.add("box");
  x.classList.add(this.boxClass);
  //
  let c1, c2, c3, c4, c5;
  c1 = document.createElement("span");
  c1.textContent = `Name: ${this.fullName}`;
  c2 = document.createElement("span");
  c2.textContent = `ID: ${this.employeeId}`;
  c3 = document.createElement("span");
  c3.textContent = `Department: ${this.department}`;
  c4 = document.createElement("span");
  c4.textContent = `Level: ${this.level}`;
  c5 = document.createElement("span");
  c5.textContent = `Salary: ${Math.ceil(this.salary)}`;
  //
  let info = document.createElement("div");
  info.className = "info";
  //
  info.append(c1);
  info.append(c2);
  info.append(c3);
  info.append(c4);
  info.append(c5);
  x.append(info);
  //
  document.querySelector("#employeeList").prepend(x);

  // // // //
  // document.write(`<h1>Name: ${this.fullName}</h1>`);
  // document.write(`<h1>Salary: ${this.salary}</h1>`);
  // document.write(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);
  // // // //
};
// Salary Calculator
Employee.prototype.salaryValue = function () {
  this.salary = 0;
  if (this.level === "Senior") {
    let min, max;
    min = 1500;
    max = 2000;
    this.salary += Math.floor(Math.random() * (max - min) + min) * 0.925;
  } else if (this.level === "Mid-Senior") {
    let min, max;
    min = 1000;
    max = 1500;
    this.salary += Math.floor(Math.random() * (max - min) + min) * 0.925;
  } else if (this.level === "Junior") {
    let min, max;
    min = 500;
    max = 1000;
    this.salary += Math.floor(Math.random() * (max - min) + min) * 0.925;
  }
};
// // // // // // // // // // //
let hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/pic04.jpg"
);

// // // // // // // // // // //
let rana = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "./assets/pic07.jpg"
);
// // // // // // // // // // //
let omar = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "./assets/pic03.jpg"
);
// // // // // // // // // // //
let safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/pic06.jpg"
);
// // // // // // // // // // //
let tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/pic07.jpg"
);
// // // // // // // // // // //
let lana = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/pic07.jpg"
);
// // // // // // // // // // //
let ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/pic01.jpg"
);
// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // //

// // // // // // // // // // //
console.log(arr);
// // // // // // // // // // //

// // // // Random ID Generator
function randomID() {
  let min, max;
  min = 1000;
  max = 2000;
  return Math.floor(Math.random() * (max - min) + min);
}
// // // // addEventListener to take data from the FORM dynamically
//
document
  .querySelector("#employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    //
    // Creating New Objects for Dynamic Employees
    new Employee(
      randomID(),
      document.querySelector("#fullName").value,
      document.querySelector("#department").value,
      document.querySelector("#level").value,
      document.querySelector("#imageUrl").value,
      "dynamic"
    );
    //
    document.querySelector("#fullName").value = "";
  });
//
