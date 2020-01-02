import {Model} from '../Model';

export class ModelC implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelC {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
