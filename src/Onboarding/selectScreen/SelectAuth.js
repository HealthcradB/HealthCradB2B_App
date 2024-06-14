import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SolidButton from '../../components/Buttons/SolidButton';
import {useNavigation} from '@react-navigation/native';
import NonSolidButton from '../../components/Buttons/NonSolidButton';

const SelectAuth = () => {
  const navigation = useNavigation();

  // methods
  const handelLogin = () => {
    navigation.navigate('Login');
  };

  const handelRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <View>
        <Image
          source={require('../../images/logo.png')}
          width={124}
          height={115}
        />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../images/box.png')} />
          <View>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 22,
                color: '#444343',
                lineHeight: 33,
                alignSelf: 'center',
              }}>
              {'Browse variety of products'}
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 22.5,
                color: '#7C7979',
                alignSelf: 'center',
              }}>
              {'Fulfill all your store requirement at one place'}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: responsiveWidth(100),
            height: 315,
            backgroundColor: '#13C7EB',
            position: 'absolute',
            bottom: 0,
            top: responsiveHeight(64),
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <View style={{marginHorizontal: 15}}>
            <View
              style={{
                position: 'relative',
                marginTop: responsiveHeight(4),
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 30,
                  lineHeight: 45,
                  color: '#FFFFFF',
                  marginBottom: responsiveWidth(4),
                }}>
                {'Let’s Get Started'}
              </Text>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: 22.5,
                  color: '#FFFFFF',
                  fontFamily: 'popins',
                }}>
                {
                  'To get started, simply create an account or login if\nyou already have an account.'
                }
              </Text>
            </View>

            <View
              style={{
                position: 'relative',
                marginTop: responsiveHeight(7),

                flexDirection: 'row',
                gap: 15,
              }}>
              <SolidButton title={'Login'} onClick={handelLogin} />
              <NonSolidButton title={'Register'} onClick={handelRegister} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectAuth;
