import { OrderState } from "./OrderState.mjs";

export class DeliveredState extends OrderState {
  proceed(order) {
    console.log("Sipariş zaten teslim edilmiş. İşlem yapılamaz.");
  }
}
