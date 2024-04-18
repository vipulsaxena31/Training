import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginButton from './LoginButton';

test('calls onClick prop when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<LoginButton onClick={onClickMock} />);

  // Simulate a button click
  fireEvent.click(getByText('Login'));

  // Expect onClickMock to have been called
  expect(onClickMock).toHaveBeenCalled();
});
