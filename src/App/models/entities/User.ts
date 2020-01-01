export class User {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(name: string) {
    this.name = name;
  }

  log() {
    console.log(this.name);
  }

}
