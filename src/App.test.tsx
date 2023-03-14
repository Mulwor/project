import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Проверка тесты на оборачивания враппера
test('Checking whether the App is wrapped in BrowserRouterDom', () => {
  render(<App />, { wrapper: BrowserRouter });
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

// Проверка тест на нахождения слова в компоненте
test('Checking all inside routes in the App class component', () => {
  render(<App />, { wrapper: BrowserRouter });
  const findWordInLayout: HTMLElement = screen.getByText(/In recognition of codes/i);
  expect(findWordInLayout).toBeInTheDocument();

  const findWordInHome: HTMLElement = screen.getByText(/Дом, милый дом!/i);
  expect(findWordInHome).toBeInTheDocument();

  const link: HTMLElement = screen.getByText(/Pitanga/i);
  expect(link).toBeInTheDocument();
  const anotherLink: HTMLElement = screen.getByText(/Pitaya/i);
  expect(anotherLink).toBeInTheDocument();
});

// Проверка, что по клику выводится ошибка страницы
test('Checking error page', () => {
  render(
    <MemoryRouter initialEntries={['/fizafazatron']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Страница недоступна')).toBeInTheDocument();
});
