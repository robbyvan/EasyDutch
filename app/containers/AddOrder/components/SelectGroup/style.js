import { StyleSheet } from 'react-native';
import * as universal from '../../../../style';

export const headerStyle = {
  headerTitle: 'Select Group',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
  tabBarVisible: false,
};

export const custom = {
  buttonText: {
    fontSize: 26,
  },
  buttonColor: universal.themeColor,
  checkMarkColor: '#a3bfb2',
  iconStyle: {
    paddingRight: 10,
    marginTop: 3,
    alignSelf: 'center',
  },
  avatarColors: ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'],
  receiveColor: '#6da674',
  payColor: '#d96e5d',
  evenColor: 'gray',
};

const style = {
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
    padding: 0,
  },
  valueText: {
    textAlign: 'left',
    marginLeft: 10,
  },
  nameText: {
    marginLeft: 10,
    fontSize: 18,
    paddingLeft: 50
  },
  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 10,
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