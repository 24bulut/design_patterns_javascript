import { PaymentStrategy } from "./PaymentStrategy.mjs";

export class CryptoPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Kripto para ile ${amount} TL ödendi.`);
  }
}
