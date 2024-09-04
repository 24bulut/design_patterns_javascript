import { PendingState } from "./PendingState.mjs";

export class Order {
  constructor() {
    this.state = new PendingState(); // Başlangıç durumu
  }

  setState(state) {
    this.state = state;
  }

  proceed() {
    this.state.proceed(this);
  }
}
