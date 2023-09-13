const fs = require("fs");

content = "./employees.json";

getEmployees(content);
function getEmployees(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    const x = [];
    var users = JSON.parse(data);
    for (let i = 0; i < users.length; i++) {
      const map = new Map(Object.entries(users[i]));
      if (map.get("salary") > 50000) {
        map.set("Tier", "1");
      } else {
        map.set("Tier", "2");
      }
      const obj = Object.fromEntries(map);
      x.push(obj);
    }
    console.log("Employess:",x);
  });
}

getTotalSalary(content);
function getTotalSalary(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    var users = JSON.parse(data);
    const total = users.reduce((accumulator, currentValue) => accumulator + currentValue.salary,0 );
    console.log("Total salary of all the Employees",total);
  });
}

getEmployeesByCity(content);
function getEmployeesByCity(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    var users = JSON.parse(data);
    const result = users.filter((user) => user.city == "Hyderabad");
    console.log("Employees from Particular City:",result);
  });
}

getTotalSalaryOfHyderabad(content);
function getTotalSalaryOfHyderabad(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    var users = JSON.parse(data);
    const empHyd = users.filter((user) => user.city == "Hyderabad");
    const total = empHyd.reduce((accumulator, currentValue) => accumulator + currentValue.salary,0);
    console.log("Total salary of Hyd Employees:",total);
  });
}

getTotalSalaryOfTier1(content);
function getTotalSalaryOfTier1(file) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    const r = [];
    var users = JSON.parse(data);
    for (let i = 0; i < users.length; i++) {
      const map = new Map(Object.entries(users[i]));
      if (map.get("salary") > 50000) {
        map.set("Tier", "1");
      } else {
        map.set("Tier", "2");
      }
      const obj = Object.fromEntries(map);
      r.push(obj);
    }
    const result = r.filter((user) => user.Tier == "1");
    console.log(result);
    const total = result.reduce((accumulator, currentValue) => accumulator + currentValue.salary,0);
    console.log("Total salary of Tier 1 employees:",total);
  });
}

