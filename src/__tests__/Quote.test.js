import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

describe('checks if Quote component renders correctly', () => {
  test('should renders correct text', () => {
    render(<Quote />);
    const text = screen.getByText(/Mathematics is not about numbers/i);
    expect(text).toBeInTheDocument();
  });

  test('should renders correct text', () => {
    render(<Quote />);
    const text = screen.getByText('Quote');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
