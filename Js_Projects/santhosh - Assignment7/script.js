function Company(name, location) {
  this.name = name;
  this.location = location;
  this.employees = [];
}

Company.prototype.hireEmployee = function (employeeName) {
  this.employees.push(employeeName);
};

Company.prototype.displayDetails = function () {
  console.log(`Company Name: ${this.name}`);
  console.log(`Location: ${this.location}`);
  console.log(`Employees: ${this.employees.join(", ")}`);
};

function SoftwareCompany(name, location) {
  Company.call(this, name, location);
  this.type = "Software";
}

function ManufactureCompany(name, location) {
  Company.call(this, name, location);
  this.type = "Manufacture";
}

SoftwareCompany.prototype = Object.create(Company.prototype);
ManufactureCompany.prototype = Object.create(Company.prototype);

SoftwareCompany.prototype.constructor = SoftwareCompany;
ManufactureCompany.prototype.constructor = ManufactureCompany;

const mphasis = new SoftwareCompany("Kore.ai", "Hyderabad");
const tata = new ManufactureCompany("Titan", "Bangalore");

mphasis.hireEmployee("Santhosh");
mphasis.hireEmployee("Vijay");
tata.hireEmployee("Raghul");
tata.hireEmployee("Sankar");

mphasis.displayDetails();
tata.displayDetails();
