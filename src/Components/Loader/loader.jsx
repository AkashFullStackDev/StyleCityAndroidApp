import { View, ActivityIndicator, StyleSheet } from "react-native"

const Loader = ({size, color}) => {
  return (
    <View style={Styles.screen}>
        <View>
            <ActivityIndicator size={size} color={color} />
        </View>
    </View>
  )
}

export default Loader;

const Styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        flex: 1,
    }
})
