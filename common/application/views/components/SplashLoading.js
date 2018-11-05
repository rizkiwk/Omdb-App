import React from 'react';
import PropTypes from 'prop-types';
import Color from '../../constant/Color';

import { StyleSheet, View } from 'react-native';
import TextRoboto from '../components/TextRoboto';

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
                <TextRoboto fontStyle="bold" style={styles.appname_text}>Imdb Movies</TextRoboto>
            </View>
        );
    }

    __startLoadingAsync = async () => {

    }

    ___onSuccessLoading = () => {
        const OnSuccess = this.props.onSuccess;

        setTimeout(function () {
            OnSuccess();
        }, 2000);
    };

}

const styles    = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary_purple,
    },
    appname_text: {
        fontSize: 20,
        color: Color.primary_white,
    },
});

SplashLoading.propTypes = {
    startAsync: PropTypes.instanceOf(Promise),
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default SplashLoading;