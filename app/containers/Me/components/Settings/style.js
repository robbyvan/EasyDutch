import { StyleSheet } from 'react-native';
import * as universal from '../../../../style';

export const headerStyle = {
  headerTitle: 'Settings',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
  tabBarVisible: false,
};

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9ef',
  },
};

export const custom = {
  buttonText: {
    fontSize: 26,
  },
  buttonColor: universal.themeColor,
  headerRightIcon: universal.themeColor,
};

export default style;