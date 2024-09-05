import { DataProcessor } from "./DataProcessor.mjs";

export class JSONDataProcessor extends DataProcessor {
  readData() {
    console.log("JSON verisi okundu.");
  }

  processData() {
    console.log("JSON verisi işleniyor...");
  }
}
