import { CoffeeDecorator } from '../CoffeeDecorator.js';

export class WithSugar extends CoffeeDecorator {
    getCost() {
      return this.coffee.getCost() + 2;
    }
  
    getDescription() {
      return `${this.coffee.getDescription()}, with Sugar`;
    }
  }
  