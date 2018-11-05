import { createSwitchNavigator } from 'react-navigation';

import AppLoadingScreen from '../views/screens/AppLoadingScreen';
import MainNav from './MainNav';

export default Navigation = createSwitchNavigator({
    APP_LOADING_SCREEN: AppLoadingScreen,
    MAIN_NAV: MainNav,
}, {
    initialRouteName: 'APP_LOADING_SCREEN',
});