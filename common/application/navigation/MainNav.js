import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../views/screens/HomeScreen';
import MovieDetailScreen from '../views/screens/MovieDetailScreen';

export default MainNav  = createStackNavigator({
    HOME_SCREEN: HomeScreen,
    SEARCH_SCREEN: HomeScreen,
    DETAIL_SCREEN: MovieDetailScreen,
}, {
    initialRouteName: "HOME_SCREEN",
    headerMode: "none",
});