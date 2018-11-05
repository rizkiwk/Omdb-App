import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../views/screens/HomeScreen';

export default HomeNav  = createStackNavigator({
    HOME_SCREEN: HomeScreen,
    SEARCH_SCREEN: HomeScreen,
}, {
    initialRouteName: "HOME_SCREEN",
    headerMode: "none",
});