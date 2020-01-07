import {Model} from '../Model';

export class ModelL implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelL {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
