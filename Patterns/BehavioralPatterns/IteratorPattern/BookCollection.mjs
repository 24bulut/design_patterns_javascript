import { Aggregator } from "./Aggregator.mjs";
import { BookIterator } from "./BookIterator.mjs";

export class BookCollection extends Aggregator {
  constructor() {
    super();
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  createIterator() {
    return new BookIterator(this.books);
  }
}
