import React from 'react';
import PropTypes from 'prop-types';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

class Icon extends React.Component {
  
  render() {
    if (this.props.type === 'font-awesome') return this.renderFontAwesome();
    if (this.props.type === 'material-icon') return this.renderMaterialIcons();
  }

  //=================================================================//
  //=================== Render Component Function ===================//
  //=================================================================//
  renderFontAwesome = () => {
    return(
      <IconFontAwesome
        name={ this.props.name }
        size={ this.props.size }
        color={ this.props.color }
      />
    );
  };

  renderMaterialIcons = () => {
    return(
      <IconMaterial
        name={ this.props.name }
        size={ this.props.size }
        color={ this.props.color }
      />
    );
  };

  renderIonicons = () => {
    return(
      <IconIon
        name={ this.props.name }
        size={ this.props.size }
        color={ this.props.color }
      />
    );
  };

}

Icon.propTypes  = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
