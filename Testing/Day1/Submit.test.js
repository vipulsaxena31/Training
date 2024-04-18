import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('calls onSubmit prop when clicked', () => {
  const onSubmitMock = jest.fn();
  const { getByText } = render(<SubmitButton onSubmit={onSubmitMock} />);

  // Simulate a button click
  fireEvent.click(getByText('Submit'));

  // Expect onSubmitMock to have been called
  expect(onSubmitMock).toHaveBeenCalled();
});