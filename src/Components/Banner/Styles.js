import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export const Styles = StyleSheet.create({
    bannerContainer: {
        flex: 1,
    },
    bannerImage: {
        height: moderateScale(100),
        width: "100%",
    }
})