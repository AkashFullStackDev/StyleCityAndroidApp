import { StyleSheet } from "react-native";
import { DefaultTheme} from "@react-navigation/native";

export const Theme = StyleSheet.create({
    ...DefaultTheme,
    colors: {
        primary: '#007bff', 
        secondary: '#eb4034', 
        text: 'black', 
        placeHolder: "grey"
    }
})