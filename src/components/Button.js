import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;

  return (
    <>
      <button
        style={{
          backgroundColor:
            name === 'x' || name === '+' || name === '-' || name === '÷'
              ? 'orange'
              : '',
        }}
        className="btn"
        type="button"
        onClick={() => handleClick(name)}
      >
        {name}
      </button>
    </>
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
