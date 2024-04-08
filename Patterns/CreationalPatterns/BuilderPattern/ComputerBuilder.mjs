import {Computer} from './Computer.mjs';


export class ComputerBuilder {

    setProcessor(processor) {
      this.processor = processor;
      return this;
    }
  
    setMemory(memory) {
      this.memory = memory;
      return this;
    }
  
    setStorage(storage) {
      this.storage = storage;
      return this;
    }
  
    setGraphicsCard(graphicsCard) {
      this.graphicsCard = graphicsCard;
      return this;
    }
  
    build() {
      return new Computer(this);
    }
  }