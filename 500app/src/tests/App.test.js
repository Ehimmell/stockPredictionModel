import { render, screen } from '@testing-library/react';
import App from '../pages/Main.js';
import ReactDOM from 'react-dom/client';
import React from 'react';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
