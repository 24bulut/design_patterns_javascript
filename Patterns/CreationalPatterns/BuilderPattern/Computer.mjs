export class Computer {
    constructor(builder) {
      this.processor = builder.processor;
      this.memory = builder.memory;
      this.storage = builder.storage;
      this.graphicsCard = builder.graphicsCard;
    }
  
    info() {
      console.log(`Processor: ${this.processor}, Memory: ${this.memory}, Storage: ${this.storage}, Graphics Card: ${this.graphicsCard}`);
    }
  }