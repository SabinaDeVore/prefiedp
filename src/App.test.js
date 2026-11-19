import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home screen', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /snakes and ladders/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /start game/i })).toBeInTheDocument();
});
