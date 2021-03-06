import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="calculator display">
    <h2 style={{ padding: '40px' }}>{result}</h2>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
