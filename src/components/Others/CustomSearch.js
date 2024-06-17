import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomSearch = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  btnStyle,
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
      ]}>
      <Image source={require('../../images/search.png')} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{fontSize: 15, color: '#7C7979', width: responsiveWidth(70)}}
        placeholder={placeholder}
        placeholderTextColor="#444343"
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

export default CustomSearch;
