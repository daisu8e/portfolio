import {Model} from './Model';

export class ModelB implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelB {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
