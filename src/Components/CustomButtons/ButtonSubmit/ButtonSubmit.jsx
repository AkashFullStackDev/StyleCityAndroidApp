import { Styles } from "./Styles";
import {Text, TouchableOpacity} from "react-native";

const ButtonSubmit = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={Styles.ButtonSubmitContainer}>
      <Text style={Styles.ButtonSubmitText}>{title}</Text>
    </TouchableOpacity>
  );

export default ButtonSubmit;