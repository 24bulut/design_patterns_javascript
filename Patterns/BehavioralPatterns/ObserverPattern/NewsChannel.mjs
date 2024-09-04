import { Observer } from "./Observer.mjs";

export class NewsChannel extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} kanalında yeni haber: ${news}`);
  }
}
