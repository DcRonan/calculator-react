import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <div className="title"> Math Magicians </div>
    </div>
    <div className="navbar">
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
