import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('checks if Home component renders correctly', () => {
  test('should renders correct text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const text = screen.getByText('Welcome to our page!');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
