import { OrderState } from "./OrderState.mjs";
import { ShippedState } from "./ShippedState.mjs";

export class PreparingState extends OrderState {
  proceed(order) {
    console.log("Sipariş Hazırlandı! Teslim ediliyor...");
    order.setState(new ShippedState());
  }
}
