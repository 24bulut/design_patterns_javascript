export class Character {
    constructor(name, health, mana, level) {
      this.name = name;
      this.health = health;
      this.mana = mana;
      this.level = level;
    }
  
    clone() {
      return new Character(this.name, this.health, this.mana, this.level);
    }
  
    attack() {
      console.log(`${this.name} is attacking!`);
    }
  
    castSpell() {
      console.log(`${this.name} is casting a spell!`);
    }

    info() {
      console.log(`Name: ${this.name}, Health: ${this.health}, Mana: ${this.mana}, Level: ${this.level}`);
    }

}
  