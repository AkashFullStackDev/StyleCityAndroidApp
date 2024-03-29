import { Styles } from "./Styles";

import {Text,TouchableOpacity} from "react-native";

const Link = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.LinkContainer}>
      <Text style={Styles.LinkText}>{title}</Text>
    </TouchableOpacity>
  )
};

export default Link;