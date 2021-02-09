import PropTypes from 'prop-types';

const Display = ({ result }) => <div className="calculator"><h2>{result}</h2></div>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
