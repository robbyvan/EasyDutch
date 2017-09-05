import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
// Styles
import style, { custom } from './style';

class BootPage extends Component {
  render() {
    return (
      <View style={style.bootPage}>
        <ActivityIndicator color={custom.indicatorColor} />
      </View>
    );
  }
}

export default BootPage;