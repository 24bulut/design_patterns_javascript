import {Remote} from './Interface/Remote.mjs';

export class BasicRemote extends Remote {
    togglePower() {
      console.log('Basic Remote: Power toggled');
    }
  
    volumeUp() {
      this.tv.setVolume(this.tv.volume + 10);
    }
  
    volumeDown() {
      this.tv.setVolume(this.tv.volume - 10);
    }
  
    channelUp() {
      this.tv.setChannel(this.tv.channel + 1);
    }
  
    channelDown() {
      this.tv.setChannel(this.tv.channel - 1);
    }
  }