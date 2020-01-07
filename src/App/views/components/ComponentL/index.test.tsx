import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {ModelL} from 'App/models/entities';

import {ComponentL} from './';

test('Test ComponentL', () => {
  const model = new ModelL('Test L');
  const onUpdate = jest.fn();
  const {getAllByText, rerender} = render(<ComponentL model={model} onUpdate={onUpdate}/>);
  const update = getAllByText('Update')[0];

  expect(getAllByText('Component L : Test L')).toHaveLength(1);
  fireEvent.click(update);
  expect(model.name).toBe('Component L');
  expect(onUpdate).toBeCalled();
  rerender(<ComponentL model={model} onUpdate={onUpdate}/>);
  expect(getAllByText('Component L : Component L')).toHaveLength(1);

});
