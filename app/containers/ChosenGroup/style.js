import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerTitle: 'Groups',
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
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  statusContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: universal.width * 0.8,
    borderBottomWidth: 1,
    borderColor: universal.themeColor,
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
  },
  totalList: {
    margin: 0,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    alignSelf: 'center',
  },
  rowLabel: {
    flex: 9,
    fontSize: 24,
    paddingLeft: 20,
    textAlign: 'left',
  },
  rowValue: {
    flex: 10,
    fontSize: 22,
    textAlign: 'left',
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
  },
  iconText: {
    fontSize: 26,
    color: '#fff',
  },
  transfer: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20, 
  },
  title: {
    marginLeft: 10,
  },
  titleText: {
    // textAlign: 'center',
    // textDecoration: 'underline',
    fontSize: 30,
    color: universal.themeColor,
  },
};

export default style;