export class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  getName() {
    return this.name;
  }

  sendMessage(message) {
    this.mediator.showMessage(this, message);
  }
}
