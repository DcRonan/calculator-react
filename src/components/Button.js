import propTypes from 'prop-types';

const { Button } = btn => <button type="button">{btn.key}</button>;

export default Button;

Button.propTypes = {
  key: propTypes.string,
};
