import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('checks if Home component renders correctly', () => {
  test('should renders correct text', () => {
    render(<Home />);
    const text = screen.getByText('Welcome to our page!');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
