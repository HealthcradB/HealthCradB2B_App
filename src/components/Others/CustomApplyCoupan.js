import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomApplyCoupan = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  btnStyle,
  placeStyle,
  onClick
}) => {
  return (
    <View
      style={[{
        width: responsiveWidth(90),
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent:'space-between',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
        borderColor:'#7C7979',
        flexDirection:'row',
        alignItems:'center'
      },btnStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[{fontSize: 14, color: '#7C7979'}, placeStyle]}
        placeholder={placeholder}
        placeholderTextColor={'#7C7979'}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
      <TouchableOpacity onPress={onClick()}>
        <Text style={{fontWeight:500 , fontSize:13 , lineHeight:19.5 , color:'#13C7EB'}}>{'APPLY'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomApplyCoupan;
