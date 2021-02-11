import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('checks if Navbar component renders correctly', () => {
  test('should renders correct text', () => {
    render(<Navbar />);
    const text = screen.getByText('Math Magicians');
    expect(text).toBeInTheDocument();
  });

  test('should renders correct text', () => {
    render(<Navbar />);
    const text = screen.getByText('Quote');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
