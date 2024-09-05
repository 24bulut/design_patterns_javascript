export class DataProcessor {
  process() {
    this.readData();
    this.processData();
    this.saveData();
  }

  readData() {
    throw new Error("Bu metod subclass tarafından uygulanmalı!");
  }

  processData() {
    console.log("Veri işleniyor...");
  }

  saveData() {
    console.log("İşlenmiş veri kaydedildi.");
  }
}
