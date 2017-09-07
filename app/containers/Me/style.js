import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerTitle: 'Me',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
};

export const custom = {
  buttonText: {
    fontSize: 26,
  },
  buttonColor: universal.themeColor,
  headerRightIcon: universal.themeColor,
  themeColor: universal.themeColor,
  avatarColors: ['#a3bfb2', '#aab7bf', '#b09f85', '#babf95', '#be7358'],
};

const style = {
  container: {
    backgroundColor: '#e9e9ef',
    flex: 1,
  },
  nameText: {
    marginLeft: 10,
    fontSize: 18,
    paddingLeft: 30
  },
  iconWrapper: {
    height: 55,
    width: 55,
    borderRadius: 5,
    // backgroundColor: universal.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  iconText: {
    fontSize: 26,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
};

export default style;