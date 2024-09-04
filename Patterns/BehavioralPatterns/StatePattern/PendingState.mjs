import { OrderState } from "./OrderState.mjs";
import { PreparingState } from "./PreparingState.mjs";

export class PendingState extends OrderState {
  proceed(order) {
    console.log("Sipariş Onaylandı! Hazırlanıyor...");
    order.setState(new PreparingState());
  }
}
