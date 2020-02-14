import {Author} from './index';

test('name', () => {
  const author = new Author('Test Name');
  expect(author.name).toBe('Test Name');
});
