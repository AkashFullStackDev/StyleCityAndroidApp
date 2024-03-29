import {StyleSheet} from 'react-native';
import { Theme } from '../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  searchBox: {
    elevation: scale(10),
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: moderateScale(160),
    paddingVertical: moderateVerticalScale(3)
  },
  textInput: {
    fontSize: scale(14),
    color: Theme.colors.text,
    marginVertical: moderateVerticalScale(-15),
    flex: 1,
  },
});
