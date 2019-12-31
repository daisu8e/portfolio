import {Model} from './Model';

export class ModelA implements Model {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string): ModelA {
    this.name = name;
    return this;
  }

  log() {
    console.log(this.name);
  }

}
