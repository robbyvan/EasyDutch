import { StyleSheet, PixelRatio } from 'react-native';
import * as universal from '../../style';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: universal.height * 0.15,
    width: universal.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    color: '#333',
  },
  inputContainer: {
    width: universal.width,
    height: universal.height * 0.23,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nameContainer: {
    height: universal.height * 0.07,
    width: universal.width * 0.8,
    borderTopWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1), // 1/n(dp) = 1(px)
    borderLeftWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderRightWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderColor: '#dedede',
    paddingLeft: 10,
  },
  pwContainer: {
    height: universal.height * 0.07,
    width: universal.width * 0.8,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderColor: '#dedede',
    paddingLeft: 10,
  },
  username: {
    flex: 1,
  },
  password: {
    flex: 1,
  },
  loginContainer: {
    height: universal.height * 0.15,
    width: universal.width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: universal.themeColor,
    width: universal.width * 0.8,
  },
  hintText: {
    color: 'gray',
  },
  indicatorStyle: {
    marginTop: 20,
  },
});

export default style;
