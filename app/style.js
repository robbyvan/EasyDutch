// 全局通用样式
import { Dimensions, PixelRatio } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const themeColor = '#A3BFB2';

export const tabHeader = {
  height: height * 0.11,
  backgroundColor: '#ededed',
  borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(0.5),
  borderColor: '#d6d6d6',
  shadowOpacity: 0,
  shadowOffset: {
    height: 0,
  },
  shadowRadius: 0,
};

export const headerTitle = {
  fontSize: 20,
};

export const headerBackTitle = {
  color: '#333',
  fontSize: 18,
};

export const headerRightCorner = {
  marginRight: 10,
  color: '#333',
  fontSize: 18,
};
