import Button from './Button';

const ButtonPanel = () => (
  <section>
    <div className="calculator">
      <div className="group-one">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
    </div>
  </section>
);

export default ButtonPanel;
