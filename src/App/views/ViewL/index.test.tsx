import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {StaticRouter} from 'react-router-dom';
import {ViewL} from './';

test('Test ViewL', () => {
  const {getAllByText} = render(<StaticRouter><ViewL/></StaticRouter>);
  const update = getAllByText('Update')[0];

  expect(getAllByText('View L : Default L')).toHaveLength(1);
  fireEvent.click(update);
  expect(getAllByText('View L : View L')).toHaveLength(1);

});
