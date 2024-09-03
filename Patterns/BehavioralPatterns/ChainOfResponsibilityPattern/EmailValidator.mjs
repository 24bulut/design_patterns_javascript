import { Validator } from "./Validator.mjs";

export class EmailValidator extends Validator {
  validate(request) {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(request.email)) {
      console.log("Hata: Geçersiz e-posta adresi.");
      return false;
    }
    return super.validate(request);
  }
}
