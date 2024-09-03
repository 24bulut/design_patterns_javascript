import { Validator } from "./Validator.mjs";

export class PasswordMatchValidator extends Validator {
  validate(request) {
    if (request.password !== request.confirmPassword) {
      console.log("Hata: Parolalar eşleşmiyor.");
      return false;
    }
    return super.validate(request);
  }
}
