import { DataProcessor } from "./DataProcessor.mjs";

export class XMLDataProcessor extends DataProcessor {
  readData() {
    console.log("XML verisi okundu.");
  }

  processData() {
    console.log("XML verisi işleniyor...");
  }
}
