import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

describe('checks rendering for ButtonPanel', () => {
  test('should render correctly', () => {
    const handleClick = () => '';

    const tree = renderer
      .create(<ButtonPanel name="AC" handleClick={handleClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
