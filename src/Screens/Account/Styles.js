import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

let ScreenHeight = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: ScreenHeight,
  },
  optionContainer: {
    padding: moderateScale(10),
  },
});
