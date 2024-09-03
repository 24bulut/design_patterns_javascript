export class GameCharacter {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(steps) {
    this.position += steps;
    console.log(
      `${this.name} ${steps} adım ileri gitti. Şu anki pozisyon: ${this.position}`
    );
  }

  moveBackward(steps) {
    this.position -= steps;
    console.log(
      `${this.name} ${steps} adım geri gitti. Şu anki pozisyon: ${this.position}`
    );
  }

  jump() {
    console.log(`${this.name} zıpladı!`);
  }
}
