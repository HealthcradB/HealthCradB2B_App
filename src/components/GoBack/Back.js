import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Back = ({Source}) => {
  const navigation = useNavigation();

  const handelGoBack = ({style }) => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity  onPress={handelGoBack}>
      <Image source={Source ? Source : require('../../images/back_white.png')} />
    </TouchableOpacity>
  );
};

export default Back;
