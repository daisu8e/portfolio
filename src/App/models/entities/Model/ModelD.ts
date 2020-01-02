import {Model} from '../Model';

export class ModelD implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelD {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
