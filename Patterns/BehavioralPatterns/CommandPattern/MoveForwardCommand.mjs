import { Command } from "./Command.mjs";

export class MoveForwardCommand extends Command {
  constructor(character, steps) {
    super();
    this.character = character;
    this.steps = steps;
  }

  execute() {
    this.character.moveForward(this.steps);
  }

  undo() {
    this.character.moveBackward(this.steps);
  }
}
