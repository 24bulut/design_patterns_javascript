export class TV {
    constructor() {
      this.volume = 50;
      this.channel = 1;
    }
  
    setVolume(volume) {
      this.volume = volume;
      console.log(`Volume set to ${this.volume}`);
    }
  
    setChannel(channel) {
      this.channel = channel;
      console.log(`Channel set to ${this.channel}`);
    }
  }
  