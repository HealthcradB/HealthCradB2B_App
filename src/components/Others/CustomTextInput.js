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
}) => {
  return (
    <View
      style={{
        width: responsiveWidth(90),
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
      }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{fontSize: 15, color: '#7C7979'}}
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

export default CustomTextInput;
