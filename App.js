import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';

/** Creating the navigator object which is needed to navigate between screens. */
const MainNavigator = createStackNavigator({
  Home : {screen : HomeScreen},
  Signup: {screen : SignupScreen}
})

const App = createAppContainer(MainNavigator);
export default App;