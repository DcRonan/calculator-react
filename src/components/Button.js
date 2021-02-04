import PropTypes from 'prop-types';

const Button = ({ name }) => <button type="button">{name}</button>;

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
