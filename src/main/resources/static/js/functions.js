function deleteEmployee(id) {
  fetch("employee/" + id, {
    method: "DELETE",
  });
  alert("employee deleted");
}

function addEmployee(id, enrollDate, hourlyRate, name) {
  if ((id || enrollDate || hourlyRate || name) == null) {
    alert("Invalid input");
  } else {
    const EmployeeModel = new Employee(
      id,
      enrollDate,
      hourlyRate,
      name
    );
    fetch("employee/", {
      method: "POST",
      body: JSON.stringify(EmployeeModel),
      headers: { "Content-Type": "application/json" },
    });
  }
}

class Employee {
  constructor(id, enrollDate, hourlyRate, name) {
    this.id = id;
    this.enrollDate = enrollDate;
    this.hourlyRate = hourlyRate;
    this.name = name;
  }
}
