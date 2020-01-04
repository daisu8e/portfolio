import {Model} from '../Model';

export class ModelJ implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelJ {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
