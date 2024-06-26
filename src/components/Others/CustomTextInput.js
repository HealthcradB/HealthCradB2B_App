import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  btnStyle,
  placeStyle
}) => {
  return (
    <View
      style={[{
        width: responsiveWidth(90),
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
        borderColor:'#7C7979'
      },btnStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[{fontSize: 14, color: '#7C7979'}, placeStyle]}
        placeholder={placeholder}
        placeholderTextColor={'#7C7979'}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

export default CustomTextInput;
