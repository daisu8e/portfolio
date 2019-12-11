import Item from './Item';

const items = [
  {
    id: 1,
    name: 'aaa'
  }, {
    id: 2,
    name: 'bbb'
  }, {
    id: 3,
    name: 'ccc'
  }
].map(it => new Item(it));

export default items;
