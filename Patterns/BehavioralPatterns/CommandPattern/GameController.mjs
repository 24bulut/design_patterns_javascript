export class GameController {
  constructor() {
    this.commands = [];
  }

  executeCommand(command) {
    command.execute();
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    if (command) {
      command.undo();
    }
  }
}
