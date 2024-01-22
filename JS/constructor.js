"use strict";
// function constructorName >> capital and singular

// Make a blueprint = (the constructor)
// first char is capital means it's a constructor not a normal function

// _____________________
let arr = [];
// _____________________

function Employee(id, name, dep, lev, img) {
  this.employeeId = id;
  this.fullName = name;
  this.department = dep;
  this.level = lev;
  this.imgURL = img;
  this.salaryValue();
  // // // // // // // // // //
  arr.push(this);
}

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
let ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Adminstration",
  "Senior",
  "randon url"
);

// ghazi.salaryValue("Senior");

// // // // // // // // // // //
let lana = new Employee(1000, "Lana Ali", "Finance", "Senior", "randon url");
// lana.salaryValue("Senior");
// // // // // // // // // // //
let tamara = new Employee(
  1001,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "randon url"
);
// tamara.salaryValue("Senior");
// // // // // // // // // // //
let safi = new Employee(
  1002,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "randon url"
);
// safi.salaryValue("Mid-Senior");
// // // // // // // // // // //
let omar = new Employee(
  1003,
  "Omar Zaid",
  "Development",
  "Senior",
  "randon url"
);
// omar.salaryValue("Senior");
// // // // // // // // // // //
let rana = new Employee(
  1004,
  "Rana Saleh",
  "Development",
  "Junior",
  "randon url"
);
// rana.salaryValue("Junior");
// // // // // // // // // // //
let hadi = new Employee(
  1005,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "randon url"
);
// hadi.salaryValue("Mid-Senior");
// // // // // // // // // // //
console.log(arr);
//
console.log(rana.salary);
console.log(omar.salary);
console.log(tamara.salary);
console.log(ghazi.salary);
// // // // // // // // // // //
Employee.prototype.renderEmployee = function () {
  document.write(`<h1>Name: ${this.fullName}</h1>`);
  document.write(`<h1>Salary: ${this.salary}</h1>`);
  document.write(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_`);
};
//
for (let i = 0; i < arr.length; i++) {
  arr[i].renderEmployee();
}

// console.log(ghazi);
// console.log(ghazi);

// Employee.prototype.salaryCalc = function (salary) {
//   return (salary = 1000);
// };
