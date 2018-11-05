import React from 'react';

import { Platform, StyleSheet, StatusBar, View } from 'react-native';
import Navigation from './navigation';

class App extends React.Component {

    render() {
        return(
            <View style={styles.main_container}>
                { Platform.OS === 'ios' && <StatusBar barStyle="default" /> }

                <Navigation />
            </View>
        );
    }

}

const styles    = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default App;