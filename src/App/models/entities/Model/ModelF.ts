import {Model} from '../Model';

export class ModelF implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelF {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
