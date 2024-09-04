export class NewsAgency {
  constructor() {
    this.observers = [];
    this.news = "";
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  updateNews(news) {
    this.news = news;
    this.notify();
  }
}
