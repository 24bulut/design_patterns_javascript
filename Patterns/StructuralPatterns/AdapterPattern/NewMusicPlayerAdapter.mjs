export class NewMusicPlayerAdapter {
    constructor(newMusicPlayer) {
      this.newMusicPlayer = newMusicPlayer;
    }
  
    playMusic() {
      this.newMusicPlayer.play();
    }
  }