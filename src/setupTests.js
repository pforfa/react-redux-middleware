import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Basic setup configuration to allow the use of enzyme in Unit/Regression Testing.
Enzyme.configure({adapter: new Adapter() });