import {Model} from '../Model';

export class ModelH implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelH {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
