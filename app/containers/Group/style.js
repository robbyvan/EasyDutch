import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerTitle: 'Groups',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
};

const style = {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerRight: {
    paddingRight: 10,
  },
  nameText: {
    marginLeft: 10,
    fontSize: 18,
    paddingLeft: 30
  },
  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 100,
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
  buttonText: {
    alignSelf: 'center',
    width: 200,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    fontSize: 24,
    borderWidth: 1,
  },
  // textAvatar: {
    // width: 35,
    // height: 35,
    // alignSelf: 'center',
    // textAlign: 'center',
    // lineHeight: 30,
    // color: '#555',
    // fontSize: 18,
  // },
};

export const custom = {
  buttonText: {
    fontSize: 26,
  },
  buttonColor: universal.themeColor,
  headerRightIcon: universal.themeColor,
};

export default style;