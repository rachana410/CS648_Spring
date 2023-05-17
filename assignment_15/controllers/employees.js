import Employee from "../models/Employee.js";

//getting all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(200).json({ employees, count: employees.length });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// getting single employee
const getEmployee = (req, res) => {
  res.send("Fetching an employee");
};

//creating an employee
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
};

//updating an employee
const updateEmployee = (req, res) => {
  res.send("Updating employee");
};

//deleting an employee
const deleteEmployee = async (req, res) => {
  // res.send('Delete an employee')
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: "Employee does not exists" });
    }
    res.status(200).json({ msg: "Employee Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
