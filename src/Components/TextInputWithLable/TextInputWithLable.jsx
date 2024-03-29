import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Theme} from '../../Theme/Theme';
import EyeIcon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const TextInputWithLable = ({
  lable,
  placeHolder,
  inputStyle,
  rightIcon,
  onChangeText,
  value,
  onPressRight,
  ...props
}) => {
  const [showEye, setShowEye] = useState(false);
  return (
    <View style={{...Styles.inputStyle, ...inputStyle}}>
      <Text style={Styles.lableTextStyle}>{lable}</Text>
      <View style={Styles.flexView}>
        <TextInput
          // value={userData.email}
          // onChangeText={value => handleOnChange('email', value)}
          style={Styles.inlineStyle}
          placeholder={placeHolder}
          placeholderTextColor={Theme.colors.placeHolder}
          {...props}
          onChangeText={onChangeText}
          value={value}
        />
        {rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              onPressRight(showEye);
              setShowEye(!showEye);
            }}>
            <EyeIcon
              name={showEye ? 'eye' : 'eye-off'}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInputWithLable;

const Styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: moderateScale(4),
  },
  inlineStyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(16),
    color: 'rgba(0,0,0,1)',
    marginLeft: moderateScale(-3),
    flex: 1,
  },
  lableTextStyle: {
    fontSize: scale(14),
    color: 'rgba(0,0,0,0.8)',
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
