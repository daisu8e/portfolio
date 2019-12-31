class Item {

  id: number;
  name: string;

  constructor(that: {id: number, name: string}) {
    this.id = that.id;
    this.name = that.name;
  }

}

export default Item;
