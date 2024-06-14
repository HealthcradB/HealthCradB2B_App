import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const NonSolidButton = ({title, btnstyle , onClick, txtStyle, source}) => {

  


  return (
    <TouchableOpacity onPress={()=>{onClick()}}
      style={[{
        width: 175,
        height: 60,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
       
      },btnstyle]}>
        <Image source={source ? source : null}/>
      <Text
        style={[{
          fontFamily: 'popins',
          fontWeight: 500,
          fontSize: 20,
          color: 'white',
          lineHeight: 30,
        },txtStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default NonSolidButton;
