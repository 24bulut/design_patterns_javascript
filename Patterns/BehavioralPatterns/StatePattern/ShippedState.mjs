import { OrderState } from "./OrderState.mjs";
import { DeliveredState } from "./DeliveredState.mjs";
export class ShippedState extends OrderState {
  proceed(order) {
    console.log("Sipariş Teslim Edildi! Süreç tamamlandı.");
    order.setState(new DeliveredState());
  }
}
