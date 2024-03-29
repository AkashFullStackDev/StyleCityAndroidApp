import { StyleSheet, Dimensions } from "react-native";
import {Theme} from "../../Theme/Theme";
import {
    scale,
    moderateScale,
    moderateVerticalScale,
  } from 'react-native-size-matters';

let screenHeight = Dimensions.get("window").height;

export const Styles = StyleSheet.create({
    screenContainer: {
        height: screenHeight,
        backgroundColor: "#fff",
        
    },
    userBackgroud: {
        backgroundColor: Theme.colors.primary,
        paddingVertical: moderateVerticalScale(10)
    },
    userContainer: {
        alignSelf: "center",
    },
    userIconContainer: {
        width: moderateScale(150),
        height: moderateVerticalScale(150),
        marginBottom: moderateVerticalScale(10),
        borderRadius: moderateScale(50)
    },
    btnChangePhotoStyle: {
        backgroundColor: "green",
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateVerticalScale(10),
        alignSelf: "center"
    },
    btnText: {
        color: "#fff",
        alignSelf: "center"
    },
    btnUpdateContainer:{
        marginTop: moderateVerticalScale(20)
    },
    btnUpdateText: {
        color: "#fff",
        alignSelf: "center",
        fontSize: scale(20)
    },
    btnUpdate: {
        backgroundColor: "green",
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateVerticalScale(10),
        alignSelf: "center",
        width: moderateScale(200),
        alignSelf: "center"
    },
    elementContainer: {
        marginBottom: moderateVerticalScale(10)
    },
    textBox: {
        fontSize: scale(15),
        color: Theme.colors.text,
    },
    textInput: {
        fontSize: scale(20),
        borderBottomColor: "grey",
        borderBottomWidth: moderateScale(1),
        paddingBottom: 0,
        marginBottom: moderateVerticalScale(10),
        color: Theme.colors.text
    },
    userDetails:{
        marginTop: moderateVerticalScale(30),
        marginHorizontal: moderateScale(10),
        padding: moderateScale(20),
        borderRadius: moderateScale(10)
    },
    profilePhoto:{
        height: moderateVerticalScale(150),
        width: moderateScale(150),
        borderRadius: moderateScale(100)
    }
})