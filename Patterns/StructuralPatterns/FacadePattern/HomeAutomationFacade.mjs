import {Light} from './Light.mjs'
import {AirConditioner} from './AirConditioner.mjs'


export class HomeAutomationFacade {
  constructor() {
    this.light = new Light();
    this.ac = new AirConditioner();
  }

  arriveHome() {
    console.log("Eve gelindi:");
    this.light.turnOn();
    this.ac.turnOn();
  }

  leaveHome() {
    console.log("Evden çıkılıyor:");
    this.light.turnOff();
    this.ac.turnOff();
  }
}
