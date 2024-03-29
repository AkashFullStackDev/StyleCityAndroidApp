import {StyleSheet, Dimensions} from 'react-native';
import { Theme } from '../../Theme/Theme';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

let screenWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    paddingBottom: moderateVerticalScale(50),
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContainer: {
    width: screenWidth
  },
  searchBarContainer: {
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headingStyle: {
    color: "#fff",
    fontSize: scale(20),
    fontWeight: "bold",
  }
});
