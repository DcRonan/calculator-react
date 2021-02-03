import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders calculator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculator - React/i);
  expect(linkElement).toBeInTheDocument();
});
