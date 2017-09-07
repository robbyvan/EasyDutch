import { StyleSheet } from 'react-native';
import * as universal from '../../style';

export const headerStyle = {
  headerTitle: 'Order Information',
  headerStyle: universal.tabHeader,
  headerTintColor: '#333',
  headerTitleStyle: universal.headerTitle,
  headerBackTitleStyle: universal.headerBackTitle,
};

export const custom = {
  receiveColor: '#6da674',
  payColor: '#d96e5d',
  evenColor: 'gray',
  themeColor: universal.themeColor,
  iconColors: ['#A3BFB2', '#AAB7BF', '#B09F85', '#BABF95', '#BE7358'],
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
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gold',
    alignSelf: 'center',
  },
  rowLabel: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    textAlign: 'left',
    alignSelf: 'center',
    color: universal.themeColor,
    // backgroundColor: 'gold'
  },
  rowValue: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    alignSelf: 'center',
    color: '#333'
  },
  iconWrapper: {
    height: 30,
    width: 30,
    borderRadius: 100,
    // borderWidth: 1,
    borderColor: universal.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconText: {
    fontSize: 26,
    color: universal.themeColor,
  },
};

export default style;