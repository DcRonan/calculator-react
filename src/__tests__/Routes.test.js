import renderer from 'react-test-renderer';
import Route from '../components/Routes';
import Home from '../components/Home';
import App from '../components/App';
import Quote from '../components/Quote';
import Error from '../components/Error';

describe('checks if the Routes have the correct directories', () => {
  test('should render to Home route', () => {
    const component = Home;

    const tree = renderer
      .create(<Route path="/" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render to App route', () => {
    const component = App;

    const tree = renderer
      .create(<Route path="/calculator" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render to Quote route', () => {
    const component = Quote;

    const tree = renderer
      .create(<Route path="/calculator" component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render to Error route', () => {
    const component = Error;

    const tree = renderer
      .create(<Route component={component} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
