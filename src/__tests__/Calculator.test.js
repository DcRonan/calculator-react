import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('checks if Calculator component renders correctly', () => {
  test('should renders correct text', () => {
    render(<Calculator />);
    const text = screen.getByText(/Let`s do some math!/i);
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
