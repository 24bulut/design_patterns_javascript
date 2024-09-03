export class Validator {
  setNext(validator) {
    this.nextValidator = validator;
    return validator; 
  }

  validate(request) {
    if (this.nextValidator) {
      return this.nextValidator.validate(request);
    }
    return true; 
  }
}
