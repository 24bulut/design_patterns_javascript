import { CarFactory } from "../Abstract/CarFactory.mjs";
import { FordSedan } from "./Cars/FordSedan.mjs";
import { FordSUV } from "./Cars/FordSUV.mjs";

export class FordCarFactory extends CarFactory {
    createSedan() {
      return new FordSedan();
    }
  
    createSUV() {
      return new FordSUV();
    }
  }