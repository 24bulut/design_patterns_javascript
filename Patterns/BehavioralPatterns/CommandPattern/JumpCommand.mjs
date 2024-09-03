import { Command } from "./Command.mjs";

export class JumpCommand extends Command {
  constructor(character) {
    super();
    this.character = character;
  }

  execute() {
    this.character.jump();
  }

  undo() {
    console.log(`${this.character.name} geri zıplayamaz!`);
  }
}
