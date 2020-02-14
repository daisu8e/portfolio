import React from 'react';
import {render} from '@testing-library/react';

import {Author} from 'App/models/entities/Author';

import {StaticRouter} from 'react-router-dom';
import {Cover} from './index';

test('Test ViewL', () => {
  window.scrollTo = jest.fn();
  const author = new Author('Test Author');
  const {getAllByText} = render(<StaticRouter><Cover author={author}/></StaticRouter>);
  expect(getAllByText('Test Author')).toHaveLength(1);
});
