import React from 'react';
import { NavigationActions } from 'react-navigation';
import Color from '../../constant/Color';
import { NavbarStyle, ContainerStyle } from '../../constant/Styles';

import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Content } from 'native-base';
import Icon from '../components/Icon';
import MovieDetailContainer from '../containers/MovieDetailContainer';

class MovieDetailScreen extends React.Component {

    render() {
        return(
            <Container>
                <Header style={NavbarStyle.navbar} iosBarStyle="light-content">
                    <View style={NavbarStyle.navbar_wrapper}>
                        <View style={NavbarStyle.navbar_left}>
                            <TouchableOpacity onPress={this.__routeBackNav.bind(this)}>
                                <Icon 
                                    name='arrow-back' 
                                    type='material-icon' 
                                    color={Color.primary_white} 
                                    size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Header>

                <Content contentContainerStyle={ContainerStyle.main_container}>
                    <MovieDetailContainer navigation={this.props.navigation} />
                </Content>
            </Container>
        );
    }

    __routeBackNav  = () => {
        const backAction    = NavigationActions.back();
        this.props.navigation.dispatch(backAction);
    }

}

export default MovieDetailScreen;