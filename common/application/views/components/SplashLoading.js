import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../constant';

import { StyleSheet, View, Text } from 'react-native';

class SplashLoading extends React.Component {

    componentDidMount() {
        if (this.props.startAsync !== undefined) {
            this.props.startAsync;
        } else {
            this.___onSuccessLoading();
        }
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text>Splash Screen</Text>
            </View>
        );
    }

    __startLoadingAsync = async () => {

    }

    ___onSuccessLoading = () => {
        const OnSuccess = this.props.onSuccess;

        setTimeout(function () {
            OnSuccess();
        }, 5000);
    };

}

const styles    = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary_white,
    },
});

SplashLoading.propTypes = {
    startAsync: PropTypes.instanceOf(Promise),
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default SplashLoading;