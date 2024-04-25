import { CoffeeDecorator } from '../CoffeeDecorator.mjs';

export class WithMilk extends CoffeeDecorator {
    getCost() {
      return this.coffee.getCost() + 5;
    }
  
    getDescription() {
      return `${this.coffee.getDescription()}, with Milk`;
    }
  }