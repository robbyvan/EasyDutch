import { StyleSheet } from 'react-native';
import * as universal from '../../../../style';

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
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  joinTitleContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center'
  },
  joinTitle: {
    fontSize: 30,
    color: '#be7358',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 2,
    // justifyContent: 'center', 
    marginTop: 20,
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    width: 300,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'left',
    padding: 10,
    height: 50,
  },
  buttonContainer: {
    // flex: 1.5,
    marginTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
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
};

export default style;