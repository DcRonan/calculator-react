import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { handleClick } = props;

  return (
    <section>
      <div className="calculator ButtonPanel">
        <div className="group-one group">
          <Button name="AC" handleClick={handleClick} />
          <Button name="+/-" handleClick={handleClick} />
          <Button name="%" handleClick={handleClick} />
          <Button name="÷" handleClick={handleClick} />
        </div>
        <div className="group-two group">
          <Button name="7" handleClick={handleClick} />
          <Button name="8" handleClick={handleClick} />
          <Button name="9" handleClick={handleClick} />
          <Button name="x" handleClick={handleClick} />
        </div>
        <div className="group-three group">
          <Button name="4" handleClick={handleClick} />
          <Button name="5" handleClick={handleClick} />
          <Button name="6" handleClick={handleClick} />
          <Button name="-" handleClick={handleClick} />
        </div>
        <div className="group-four group">
          <Button name="1" handleClick={handleClick} />
          <Button name="2" handleClick={handleClick} />
          <Button name="3" handleClick={handleClick} />
          <Button name="+" handleClick={handleClick} />
        </div>
        <div className="group-five group">
          <Button name="0" handleClick={handleClick} />
          <Button name="." handleClick={handleClick} />
          <Button name="=" handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
