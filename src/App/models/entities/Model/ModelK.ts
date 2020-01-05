import {Model} from '../Model';

export class ModelK implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelK {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
