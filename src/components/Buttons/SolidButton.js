import {View, Text , TouchableOpacity} from 'react-native';
import React from 'react';

const SolidButton = ({title,btnstyle , onClick,txtStyle , disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={()=>{onClick()}}
      style={[{
        width: 175,
        height: 60,
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }, btnstyle]}>
      <Text
        style={[{
          fontFamily: 'popins',
          fontSize: 20,
          fontWeight: 500,
          color: '#13C7EB',
          lineHeight: 30,
        },txtStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SolidButton;
