import React from 'react';
import { NavigationActions } from 'react-navigation';

import SplashLoading from '../components/SplashLoading';

class AppLoadingScreen extends React.Component {

    render() {
        return(
            <SplashLoading 
                onSuccess={this.__onSuccessSplashLoading.bind(this)}
            />
        );
    }

    __onSuccessSplashLoading    = () => {
        const MainNavAction = NavigationActions.navigate({
            routeName: 'MAIN_NAV',
        });

        this.props.navigation.dispatch(MainNavAction);
    }
    
}

export default AppLoadingScreen;