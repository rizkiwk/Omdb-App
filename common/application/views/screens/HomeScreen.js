import React from 'react';
import Color from '../../constant/Color';
import { NavbarStyle } from '../../constant/Styles';

import { StyleSheet, View } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { SearchBar } from 'react-native-elements';
import SearchBarContainer from '../containers/SearchBarContainer';

import MovieListContainer from '../containers/MovieListContainer';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state  = {
            showSearchContent: false,
        };
    }

    render() {
        return (
            <Container>
                <Header style={NavbarStyle.navbar} iosBarStyle="light-content">
                    <View style={NavbarStyle.navbar_wrapper_full}>
                        <View style={NavbarStyle.navbar_body}>
                            <SearchBarContainer />
                        </View>
                    </View>
                </Header>

                <View style={styles.main_container}>
                    <MovieListContainer navigation={this.props.navigation} />
                </View>
            </Container>
        );
    }

}

const styles    = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Color.primary_white,
    },
    searchbar_container: {
        width: '100%',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
    },
});

export default HomeScreen;