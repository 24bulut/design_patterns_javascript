import { Iterator } from "./Itterator.mjs";

export class BookIterator extends Iterator {
  constructor(books) {
    super();
    this.books = books;
    this.index = 0;
  }

  next() {
    return this.hasNext() ? this.books[this.index++] : null;
  }

  hasNext() {
    return this.index < this.books.length;
  }
}
