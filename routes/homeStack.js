import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: { backgroundColor: '#eee' },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    title: 'Review Details',
    // headerStyle: { backgroundColor: '#eee' },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default createAppContainer(HomeStack);
