export class Database {
    static instance = null;
    constructor() {
      if (!this.instance) {
        this._data = [];
        this.instance = this;
      }
      return this.instance;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
  
    logData() {
      console.log(this._data);;
    }
  
    addData(item) {
      this._data.push(item);
    }
  }
  