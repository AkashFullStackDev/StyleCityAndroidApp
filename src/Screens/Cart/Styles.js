import {StyleSheet} from 'react-native';
import { Theme } from '../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingBottom: moderateVerticalScale(100),
    position: "relative",
    flex: 1,
    // margin: moderateScale(10),
    paddingHorizontal: moderateScale(10)
  },
  productImg: {
    height: moderateVerticalScale(120),
    width: moderateScale(120),
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(5),
    borderBottomColor: 'grey',
    borderBottomWidth: moderateScale(1),
  }, 
  btnRemoveContainer: {
    alignSelf: 'flex-end',
  },
  btnRemove: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(10)
  },
  btnText: {
    color: '#fff',
  },
  detailsContainer: {
    width: moderateScale(220),
    justifyContent: 'space-between',
    height: moderateVerticalScale(120),
    paddingHorizontal: moderateScale(20)
  },
  textBox: {
    fontSize: scale(14),
    textAlign: 'right',
    justifyContent: 'center',
    color: Theme.colors.text,
  },
  details: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  btnCheckoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btnCheckout: {
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10),
  },
  btnTextCheckout:{
    color: "#fff",
    fontSize: scale(24),
    fontWeight: "bold"
  },
  flatList: {
    marginTop: moderateVerticalScale(60),
    flexGrow: 1
  },
  headingStyle: {
    position: "absolute",
    color: "black",
    fontSize: scale(24),
    fontWeight: "bold",
    left: 0,
    right: 0,
    height: moderateVerticalScale(50),
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "grey",
    zIndex: 1,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  totalTitleText: {
    color: Theme.colors.text,
    fontSize: scale(18),
  },
  totalPriceText: {
    color: "red",
    fontSize: scale(20),
    fontWeight: "bold"
  },
  btnQuantityContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  btnQuantity: {  },
  btnQtyText: {
    fontSize: scale(30),
    color: '#fff',
  },
  qty: {
    fontSize: scale(22),
    color: 'grey',
    alignSelf: 'center',
  },
  emptyHeading: {
    fontSize: scale(30),
    marginTop: moderateVerticalScale(380),
    textAlign: "center",
    color: "lightgrey"
  }
});
