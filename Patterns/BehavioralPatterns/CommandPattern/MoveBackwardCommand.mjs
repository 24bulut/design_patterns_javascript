import { Command } from "./Command.mjs";

export class MoveBackwardCommand extends Command {
  constructor(character, steps) {
    super();
    this.character = character;
    this.steps = steps;
  }

  execute() {
    this.character.moveBackward(this.steps);
  }

  undo() {
    this.character.moveForward(this.steps);
  }
}
