import {Employee} from './Employee.mjs';

export class Manager extends Employee {
    constructor(name, position) {
      super(name, position);
      this.employees = [];
    }
    
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    display() {
      console.log(`${this.position}: ${this.name}`);
      this.employees.forEach(employee => employee.display());
    }
  }
  