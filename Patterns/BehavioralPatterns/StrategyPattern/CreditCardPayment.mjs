import { PaymentStrategy } from "./PaymentStrategy.mjs";

export class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Kredi kartı ile ${amount} TL ödendi.`);
  }
}
