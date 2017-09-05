import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerTitle: 'Me',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
};

const style = {
  myButton: {
    width: 100,
    height: 40,
    backgroundColor: universal.themeColor,
  },
};

export default style;