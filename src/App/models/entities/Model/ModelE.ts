import {Model} from '../Model';

export class ModelE implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelE {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
