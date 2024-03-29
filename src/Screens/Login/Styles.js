import {StyleSheet} from 'react-native';
import {Theme} from '../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  screenContainer: {
    padding: moderateScale(20),
  },
  formHeading: {
    color: Theme.colors.primary,
    fontSize: scale(30),
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    marginBottom: moderateVerticalScale(25),
  },
  linkElement: {
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  commenttext: {
    fontSize: scale(18),
    color: Theme.colors.text,
    textAlign: 'center',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: moderateVerticalScale(-100),
    backgroundColor: "white"
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
    color: 'black',
  },
  forgotText: {
    fontSize: scale(16),
    color: Theme.colors.primary,
    fontWeight: '600',
  },
  btnStyle: {
    backgroundColor: Theme.colors.primary,
    height: moderateVerticalScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(25),
  },
  btnTextStyle: {
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: scale(18),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btnContainer: {
    paddingHorizontal: moderateScale(24),
    justifyContent: 'center',
    paddingBottom: moderateVerticalScale(10),
    backgroundColor: "white"
  },
  iconBtnStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(25),
    marginTop: moderateVerticalScale(10),
    borderColor: Theme.colors.primary,
    borderWidth: 1,
  },
  iconStyle: {
    width: moderateScale(30),
    height: moderateVerticalScale(30),
    marginRight: moderateScale(10),
  },
  textStyle: {
    fontSize: scale(20),
    color: Theme.colors.primary,
  },
});
