import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import React from 'react';

const ButtonWithLableIcon = ({
  onPress,
  btnStyle,
  textStyle,
  iconStyle,
  icon,
  text,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle} activeOpacity={0.8}>
      <Image style={iconStyle} source={icon} />
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithLableIcon;

const Styles = StyleSheet.create({});
