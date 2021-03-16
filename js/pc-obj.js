export class PC {
  constructor(processor, ram) {
    this._processor = processor;
    this._ram = ram;
  }

  showSpecs() {
    console.warn(`Processor is ${this._processor}. RAM is ${this._ram}GB`);
  }
}
