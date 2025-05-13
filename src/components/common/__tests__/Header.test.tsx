import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/title/i);
    expect(titleElement).toBeTruthy();
  });
});
