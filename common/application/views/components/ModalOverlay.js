import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../constant';

import { StyleSheet, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback, View } from 'react-native';

class ModalOverlay extends React.Component {

    constructor(props) {
        super(props);

        this.state  = {
            isModalShow: false,
        };
    }

    componentWillMount() {
        console.log('modalShow.props: ' + this.props.visible);
        this.setState({ isModalShow: this.props.visible });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isModalShow: nextProps.visible });
    }

    render() {
        console.log('modalShow.state: '+ this.state.isModalShow);
        return(
            <Modal
                animationType="fade"
                transparent
                visible={this.state.isModalShow}>
                <TouchableOpacity 
                    style={styles.backdrop_container} 
                    activeOpacity={1}
                    onPressOut={() => this.__onPressOverlay()}>
                    <View style={styles.modal_container}>
                        <TouchableWithoutFeedback>
                            {this.props.renderComponent}
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }

    __onPressOverlay    = () => {
        this.setState({ isModalShow: false });
    }

}

const styles    = StyleSheet.create({
    backdrop_container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modal_container: {
        shadowOffset:{ width: 1, height: 3 },
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 1.0,
        backgroundColor: Color.primary_white,
    },
});

ModalOverlay.propTypes = {
    renderComponent: PropTypes.node,
    visible: PropTypes.bool,
    onPressOverlay: PropTypes.func,
}

ModalOverlay.defaultProps = {
    visible: false,
}

export default ModalOverlay;