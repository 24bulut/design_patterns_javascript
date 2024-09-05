export class PaymentStrategy {
  pay(amount) {
    throw new Error("Bu metod subclass tarafından uygulanmalı!");
  }
}
