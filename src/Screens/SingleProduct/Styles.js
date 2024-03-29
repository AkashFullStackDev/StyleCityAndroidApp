import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from '../../Theme/Theme';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    // paddingHorizontal: moderateScale(10)
  },
  productImage: {
    width: '100%',
    height: moderateVerticalScale(screenWidth - 40),
    alignSelf: 'center',
  },
  productContainer: {
    // padding: moderateScale(10),
    // borderRadius: moderateScale(30),
    // margin: moderateScale(10),
    // backgroundColor: 'yellow',
  },
  detailsContainer: {
    // padding: moderateScale(20),
    paddingBottom: moderateVerticalScale(100),
    // backgroundColor: 'red',
  },
  textBox: {
    fontSize: scale(16),
    marginTop: moderateVerticalScale(10),
    fontWeight: 'bold',
    color: Theme.colors.text,
  },
  btnAddToCart: {
    position: 'absolute',
    bottom: moderateVerticalScale(10),
    left: moderateScale(10),
    right: moderateScale(10),
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(5),
    borderRadius: moderateScale(50),
  },
  btnText: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: '#fff',
  },
  qtyPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityText: {
    fontSize: scale(12),
    color: Theme.colors.text,
  },
  priceTitle: {
    fontSize: scale(12),
    color: Theme.colors.text,
    textAlignVertical: 'bottom',
  },
  priceText: {
    fontSize: scale(14),
    color: 'red',
    textAlignVertical: 'bottom',
  },
  priceContainer: {
    flexDirection: 'row',
    textAlignVertical: 'bottom',
  },
  quantityContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetails: {
    marginTop: moderateVerticalScale(10),
    fontSize: scale(12),
    color: Theme.colors.text,
  },
  btnQuantityContainer: {
    flexDirection: 'row',
  },
  btnQuantity: {
    width: moderateScale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnQtyText: {
    fontSize: scale(30),
    color: '#fff',
  },
  qty: {
    fontSize: scale(22),
    color: 'grey',
    alignSelf: 'center',
  },
  horizontalPadding: {
    paddingHorizontal: moderateScale(5),
  },
});
