import { StyleSheet } from 'react-native';
import * as universal from '../../../../style';

export const headerStyle = {
  headerTitle: 'Date',
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
  modalContainer:{
    backgroundColor: 'rgba(233, 233, 239, 0.7)',
    flex: 1,
    borderTopWidth: 1, 
    borderColor: '#ddd',
    marginTop: universal.height * 0.66, //,
    shadowColor: '#ccc',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  modalButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#579FF0',
  },
  dpContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    // paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  yearPicker: {
    flex: 1,
  },
  monthPicker: {
    flex: 1,
  },
};

export default style;