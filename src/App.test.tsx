import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('Checking whether the App is wrapped in BrowserRouterDom', () => {
  render(<App />, { wrapper: BrowserRouter });
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test('Checking all inside routes in the App class component', () => {
  render(<App />, { wrapper: BrowserRouter });

  // App => Layout
  const findWordInLayout: HTMLElement = screen.getByText(/In recognition of codes/i);
  expect(findWordInLayout).toBeInTheDocument();

  // App => Home
  const findWordInHome: HTMLElement = screen.getByText(/Дом, милый дом!/i);
  expect(findWordInHome).toBeInTheDocument();

  // App => Home => Cards __ cards = [ Pitanga and Pitaya]
  const link: HTMLElement = screen.getByText(/Pitanga/i);
  expect(link).toBeInTheDocument();
  const anotherLink: HTMLElement = screen.getByText(/Pitaya/i);
  expect(anotherLink).toBeInTheDocument();
});
