import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <div className="title"> Math Magicians </div>
    </div>
    <div className="navbar">
      <Link to="/">Home </Link>
      <Link to="/calculator" style={{ padding: '0 8px 0 8px', borderRight: '1px solid black', borderLeft: '1px solid black' }}>Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
