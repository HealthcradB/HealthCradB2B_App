import { View, Text } from 'react-native'
import React from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

const CustomDob = () => {
  return (
    <View
      style={{
        width: responsiveWidth(41),
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
      }}>
     
    </View>
  )
}

export default CustomDob