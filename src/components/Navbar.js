import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <div className="title"> Math Magicians </div>
    </div>
    <div className="navbar">
      <BrowserRouter>
        <Link to="/">Home </Link>
        <Link
          to="/calculator"
        >
          Calculator
        </Link>
        <Link to="/quote">Quote</Link>
      </BrowserRouter>
    </div>
  </nav>
);

export default Navbar;
