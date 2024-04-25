import {Employee} from './Employee.mjs';

export class Developer extends Employee {
    constructor(name, position) {
      super(name, position);
    }
  
    display() {
      console.log(`${this.position}: ${this.name}`);
    }
}