import {Model} from '../Model';

export class ModelI implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelI {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
