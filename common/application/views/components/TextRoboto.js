import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

class TextRoboto extends React.Component {

  render() {
    const fontStyle = this.props.fontStyle;

    switch(fontStyle) {
      case 'regular':
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto-Regular' }]} />;
      case 'light':
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto-Light' }]} />;
      case 'bold':
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto-Bold' }]} />;
      default:
        return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto-regular' }]} />;
    }
  }

}

TextRoboto.propTypes = {
  fontStyle: PropTypes.string,
}

TextRoboto.defaultProps = {
  fontStyle: 'regular',
}

export default TextRoboto;
