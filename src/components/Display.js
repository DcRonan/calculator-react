import propTypes from 'prop-types';

const Display = ({ result }) => <h1>{result}</h1>;

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: propTypes.string,
};
