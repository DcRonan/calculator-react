import PropTypes from 'prop-types';

const Button = key => <button type="button">{key}</button>;

Button.defaultProps = {
  key: '',
};

Button.propTypes = {
  key: PropTypes.string,
};

export default Button;
