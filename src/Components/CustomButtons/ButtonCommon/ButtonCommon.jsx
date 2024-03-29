import { TouchableOpacity, Text } from "react-native";

const ButtonCommon = ({title, buttonStyle,  textStyle, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}
 
export default ButtonCommon;