import { Remote } from "./Interface/Remote.mjs";


export class SmartRemote extends Remote {
    togglePower() {
      console.log('Smart Remote: Power toggled');
    }
  
    volumeUp() {
      this.tv.setVolume(this.tv.volume + 5);
    }
  
    volumeDown() {
      this.tv.setVolume(this.tv.volume - 5);
    }
  
    channelUp() {
      this.tv.setChannel(this.tv.channel + 10);
    }
  
    channelDown() {
      this.tv.setChannel(this.tv.channel - 10);
    }
  }