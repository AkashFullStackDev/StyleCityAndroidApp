import {StyleSheet} from 'react-native';
import { Theme } from '../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  screen: {
    margin: moderateScale(20)
  },
  btnContainer: {
    // borderWidth: 1,
  },
  btn: {
    padding: moderateScale(10),
    flexDirection: "row"
  },
  btnText: {
    fontSize: scale(20),
    color: Theme.colors.text,
    fontWeight: "bold",
    marginLeft: moderateScale(10),
  },
  horizontalLine: {
    backgroundColor: "grey",
    height: 1,
    marginBottom: moderateVerticalScale(10)
  }
});
