import { StyleSheet } from 'react-native';
import * as universal from '../../style';

const style = StyleSheet.create({
  bootPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const custom = {
  indicatorColor: universal.themeColor,
};

export default style;