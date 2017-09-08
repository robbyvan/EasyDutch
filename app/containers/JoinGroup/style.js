import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  header: null,
  headerBackTitle: null,
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
  themeColor: universal.themeColor,
};

const style = {
  headerRight: {
    paddingRight: 10,
  },
  headerRightText: {
    fontSize: 18,
    color: universal.themeColor,
  },
  wrapper: {
    // backgroundColor: 'pink',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  joinTitleContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  joinTitle: {
    fontSize: 40,
    color: '#a3bfb2'
  },
  buttonContainer: {
    flex: 1.5,
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
  backButton: {
    marginTop: 40,
    fontSize: 18,
    textAlign: 'center',
    color: '#a3bfb2'
  },
  successTitle: {
    fontSize: 26,
    color: '#a3bfb2'
  },
  closeButton: {
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