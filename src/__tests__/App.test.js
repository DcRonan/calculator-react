import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

describe('checks if the App component renders correctly', () => {
  test('renders calculator link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Let`s do some math!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display a correct number', () => {
    render(<App />);
    const btn = screen.getByText('5');
    expect(btn).toBeInTheDocument();
  });

  test('should receive correct value when clicking specific buttons', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('520')).toBeInTheDocument();
  });
});
