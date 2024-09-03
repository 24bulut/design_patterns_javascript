import { Validator } from "./Validator.mjs";

export class PasswordLengthValidator extends Validator {
  validate(request) {
    if (request.password.length < 8) {
      console.log("Hata: Parola en az 8 karakter olmalıdır.");
      return false;
    }
    return super.validate(request);
  }
}
