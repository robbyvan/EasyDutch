import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
  tabBarVisible: false,
};

export const custom = {
  receiveColor: '#6da674',
  payColor: '#d96e5d',
  evenColor: 'gray',
};

const style = {
   headerRight: {
    paddingRight: 10,
  },
  headerRightText: {
    fontSize: 18,
    color: universal.themeColor,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
};

export default style;