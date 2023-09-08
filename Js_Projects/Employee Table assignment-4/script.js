var students = {

      "arun@gmail.com": {
        firstname: "Arun",
        lastname: "Varma",
        age: 22,
        mobile: 9232233268,
        city: "Chennai",
      },

  "abhi@gmail.com": {
    firstname: "Abhisheik",
    lastname: "Varma",
    age: 25,
    mobile: 9876543421,
    city: "Delhi",
  },

  "babu@gmail.com": {
    firstname: "Babu",
    lastname: "Annam",
    age: 20,
    mobile: 963672821,
    city: "Hyderabad",
  },

  "chitra@gmail.com": {
    firstname: "Chitra",
    lastname: "Kumar",
    age: 22,
    mobile: 8988764452,
    city: "Bangalore",
  },

  "deepa@gmail.com": {
    firstname: "Deepa",
    lastname: "Varma",
    age: 27,
    mobile: 9765789008,
    city: "Chennai",
  },
  
};

function displayStudentList() {
  for (var email in students) {
    var student = students[email];

    localStorage.setItem(email + "-firstname", student.firstname);

    localStorage.setItem(email + "-lastname", student.lastname);

    localStorage.setItem(email + "-mobile", student.mobile);

    localStorage.setItem(email + "-age", student.age);

    localStorage.setItem(email + "-city", student.city);
  }

  var data = `<div class="table">
     <div>
       <div class="table-head">
     <div class="header">Name</div>
      <div class="header">Age</div>
  <div class="header">Mobile</div>
  <div class="header">Email</div>
  <div class="header">City</div>
  </div>
  </div>
  <div>`;

  for (var email in students) {
    var fname = localStorage.getItem(email + "-firstname");
    var lname = localStorage.getItem(email + "-lastname");
    var mobile = localStorage.getItem(email + "-email");
    var age = localStorage.getItem(email + "-age");
    var mobile = localStorage.getItem(email + "-mobile");
    var city = localStorage.getItem(email + "-city");

    data += `
        <div  class="table-rows">
  <div class="row">${fname} ${lname}</div>
 <div class="row">${age}</div>
  <div class="row">${mobile}</div>
  <div class="row">${email}</div>
 <div class="row">${city}</div>
 </div>`;
  }

  data += `</div></div>`;
  document.getElementById("student-table").innerHTML = data;
}

onload = displayStudentList();

// let user= new map([{id:"1001",
// name:"sandy",
// exp:"2"},{id:"1002",
// name:"kiran",
// exp:"7"},{id:"1003",
// name:"Vinay",
// exp:"5"},{id:"1004",
// name:"Babu",
// exp:"8"},
// {id:"1005",
// name:"ajay",
// exp:"1"}]);

// let x = user.get('id')

// console.log(x);


