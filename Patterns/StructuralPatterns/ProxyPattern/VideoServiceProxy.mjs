import { VideoService } from "./VideoService.mjs";

export class VideoServiceProxy {
  constructor(user) {
    this.user = user;
    this.videoService = new VideoService();
  }

  playVideo(videoId) {
    if (this.user.isPremium) {
      this.videoService.playVideo(videoId);
    } else {
      console.log("This video is only for premium users");
    }
  }
}
