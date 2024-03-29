import {TouchableOpacity, Text} from 'react-native';
import { Styles } from './Styles';

const ButtonLink = ({onPress, title, Icon, iconName, iconColor, iconSize}) => (
  <TouchableOpacity onPress={onPress} style={Styles.ButtonLinkContainer}>
    <Icon name={iconName} size={iconSize} color={iconColor} />
    <Text style={Styles.ButtonLinkText}>{title}</Text>
  </TouchableOpacity>
);

export default ButtonLink;
