import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('SelectAuth');
      navigation.navigate('AppNavigator');
    }, 2000);
  }, []);

  return (
    <View style={{top: responsiveHeight(45), left: responsiveWidth(30)}}>
      <Image source={require('../../images/app_logo.png')} />
    </View>
  );
};

export default Splash;
