import { StyleSheet } from "react-native";
import { Theme } from "../../Theme/Theme";
import {
    scale,
    moderateScale,
    moderateVerticalScale,
  } from 'react-native-size-matters';

export const Styles = StyleSheet.create({
    cardContainer: {
        elevation: 8,
        backgroundColor: "#fff",
        padding: moderateScale(5),
        margin: moderateScale(5),
        alignItems: "center",
    },
    img: {
        width: moderateScale(65),
        height: moderateVerticalScale(75),
        backgroundColor: "grey"
    },
    imgContainer: {
        justifyContent:"center",
        alignItems: "center",
    },
    title:{
        color: Theme.colors.text,
        fontSize: scale(10)
    },
    price: {
        color: Theme.colors.text,
        fontSize: scale(10)
    },
    btnAddToCart: {
        backgroundColor: Theme.colors.primary,
        borderRadius: moderateScale(5),
        marginTop: moderateVerticalScale(5),
        paddingVertical: moderateScale(5)
    },
    btnText: {
        color: "#fff",
        alignSelf: "center",
        fontSize: scale(8)
    }
})