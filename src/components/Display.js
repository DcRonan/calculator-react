import PropTypes from 'prop-types';

const Display = ({ result }) => <h1>{result}</h1>;

Display.defaultProps = {
  result: 'Calculator - React',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
