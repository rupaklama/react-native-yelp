import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

// creating Stack navigator object to create routes
// This is also known as App Navigator to show different screens
const navigator = createStackNavigator(
  {
    // first arg is the route config object to Navigate around Different Screens
    // when using Stack navigator, at least need to have ONE SCREEN
    Search: SearchScreen,
  },
  {
    // as second arg, setting default route to show anytime app starts up
    // note - name needs to be exact same in above route config - Search: SearchScreen

    // default Route we want to show when our App starts up
    initialRouteName: 'Search',

    // to customize the Header on every different screens
    defaultNavigationOptions: {
      // default title
      title: 'Business Search',
    },
  }
);

// createAppContainer function essentially creates default App Component
// & displays whatever content that 'navigator' is producing inside of App Container
export default createAppContainer(navigator);
