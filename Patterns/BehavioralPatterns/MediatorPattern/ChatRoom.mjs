import { ChatRoomMediator } from "./ChatRoomMediator.mjs";

export class ChatRoom extends ChatRoomMediator {
  showMessage(user, message) {
    const time = new Date().toLocaleTimeString();
    const sender = user.getName();
    console.log(`${time} [${sender}]: ${message}`);
  }
}
