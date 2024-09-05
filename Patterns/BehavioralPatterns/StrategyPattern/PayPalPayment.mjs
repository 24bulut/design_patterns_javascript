import { PaymentStrategy } from "./PaymentStrategy.mjs";

export class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`PayPal ile ${amount} TL ödendi.`);
  }
}
