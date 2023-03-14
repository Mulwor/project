import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '.';

test('Testing input value', () => {
  render(<Search />);
  const input = screen.getByPlaceholderText(/Поиск по карточкам.../i);
  expect(input).toBeInTheDocument();
});
