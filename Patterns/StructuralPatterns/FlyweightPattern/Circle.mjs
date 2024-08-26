export class Circle {
  constructor(color) {
    this.color = color;
  }

  draw(x, y, radius) {
    console.log(
      `Daire çiziliyor: Renk=${this.color}, x=${x}, y=${y}, yarıçap=${radius}`
    );
  }
}
