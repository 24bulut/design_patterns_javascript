import { CarFactory } from "../Abstract/CarFactory.mjs";
import { ToyotaSedan } from "./Cars/ToyotaSedan.mjs";
import { ToyotaSUV } from "./Cars/ToyotaSUV.mjs";


export class ToyotaCarFactory extends CarFactory {
    createSedan() {
      return new ToyotaSedan();
    }
  
    createSUV() {
      return new ToyotaSUV();
    }
  }