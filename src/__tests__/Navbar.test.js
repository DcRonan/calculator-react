import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('checks if Navbar component renders correctly', () => {
  test('should renders correct text', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const text = screen.getByText('Math Magicians');
    expect(text).toBeInTheDocument();
  });

  test('should renders correct text', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const text = screen.getByText('Quote');
    expect(text).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
