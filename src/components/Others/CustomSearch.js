import { View, TextInput, Image } from 'react-native';
import React from 'react';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const CustomSearch = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  btnStyle,
  onFocus, // Add onFocus prop
  onBlur   // Add onBlur prop
}) => {
  return (
    <View
      style={[
        {
          width: responsiveWidth(90),
          height: 55,
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 8,
          gap: 25,
          paddingLeft: responsiveWidth(5),
          paddingRight: responsiveWidth(5),
          flexDirection: 'row',
          alignItems: 'center',
        },
        btnStyle,
      ]}
    >
      <Image source={require('../../images/search.png')} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ fontSize: 15, color: '#7C7979', width: responsiveWidth(70) }}
        placeholder={placeholder}
        placeholderTextColor="#444343"
        keyboardType={keyboardType ? keyboardType : 'default'}
        onFocus={onFocus}   // Use onFocus prop
        onBlur={onBlur}     // Use onBlur prop
      />
    </View>
  );
};

export default CustomSearch;
