import { StyleSheet } from 'react-native';
import * as universal from '../../../../style';

export const headerStyle = {
  headerTitle: 'Price',
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
  headerRight: {
    paddingRight: 10,
  },
  headerRightText: {
    fontSize: 18,
    color: universal.themeColor,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
    marginTop: 10,
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    height: 50,
  },
};

export default style;