import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => {
  const click = handleClick(name);

  return (
    <button type="button" onClick={click}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
