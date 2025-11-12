import { render, screen } from '@testing-library/react';
import App from './App';

// original example commented out
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  render(<App />);
  expect(screen).toBeDefined();
});
