import {Circle} from './Circle.mjs';

export class CircleFactory {
  constructor() {
    this.circles = {};
  }

  getCircle(color) {
    if (!this.circles[color]) {
      this.circles[color] = new Circle(color);
      console.log(`Yeni daire oluşturuldu: Renk=${color}`);
    }
    return this.circles[color];
  }
}
