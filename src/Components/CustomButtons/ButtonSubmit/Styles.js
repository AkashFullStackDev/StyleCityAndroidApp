import {StyleSheet} from 'react-native';
import { Theme } from '../../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  ButtonSubmitContainer: {
    elevation: scale(8),
    backgroundColor: Theme.colors.primary,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(12),
  },
  ButtonSubmitText: {
    fontSize: scale(18),
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
