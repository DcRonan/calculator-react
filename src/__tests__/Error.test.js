import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Error from '../components/Error';

describe('checks if Error component renders correctly', () => {
  test('should renders correct text', () => {
    render(<Error />);
    const text = screen.getByText('Error! Page not found.');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
