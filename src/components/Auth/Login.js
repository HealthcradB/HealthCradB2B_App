import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../GoBack/Back';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../Others/CustomTextInput';
import SolidButton from '../Buttons/SolidButton';
import NonSolidButton from '../Buttons/NonSolidButton';

const Login = () => {
  const navigation = useNavigation();

  const handelRegister = () => {
    navigation.navigate('Register');
  };

  const navigateLoginOtp = () => {
    navigation.navigate('LoginOtp');
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: '#13C7EB', height: responsiveHeight(27)}}>
        <View
          style={{
            marginLeft: responsiveWidth(4),
            marginTop: responsiveHeight(5),
          }}>
          <View style={{}}>
            <Back />
          </View>
          <View style={{marginTop: responsiveHeight(5)}}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 30,
                lineHeight: 45,
                color: 'white',
              }}>
              Login
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: 'white',
              }}>
              {'Hello again, you’ve been missed'}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: responsiveHeight(100),
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: responsiveHeight(-2),
        }}>
        <View style={{marginLeft: responsiveWidth(5.5), gap: 38}}>
          <View
            style={{
              gap: 7,
              marginTop: responsiveHeight(5),
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: '#444343',
              }}>
              {'Phone Number'}
            </Text>
            <CustomTextInput
              placeholder={'type your phone number'}
              keyboardType={'number-pad'}
            />
          </View>

          <View>
            <SolidButton
              title={'Get Otp'}
              onClick={navigateLoginOtp}
              txtStyle={{
                color: 'white',
                fontWeight: 600,
                fontSize: 22,
                lineHeight: 33,
              }}
              btnstyle={{
                backgroundColor: '#13C7EB',
                width: responsiveWidth(90),
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              marginRight: responsiveWidth(5),
              marginTop: responsiveHeight(3.8),
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#7C7979',
                width: responsiveWidth(38),
                height: 0,
              }}></View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                lineHeight: 22.5,
                color: '#1E1E1E',
              }}>
              OR
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#7C7979',
                width: responsiveWidth(38),
                height: 0,
              }}></View>
          </View>

          <View style={{marginTop: responsiveHeight(4)}}>
            <NonSolidButton
              title={'Login with whatsapp'}
              txtStyle={{
                fontWeight: 400,
                fontSize: 20,
                lineHeight: 30,
                color: '#1E1E1E',
              }}
              btnstyle={{
                borderColor: '#7C7979',
                borderWidth: 1,
                width: responsiveWidth(90),
                flexDirection: 'row',
                gap: 15,
              }}
              source={require('../../images/whatsup.png')}
            />

            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                justifyContent: 'center',
                marginTop: responsiveHeight(1.8),
                alignItems: 'center',
                marginRight: responsiveWidth(2),
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 24,
                  color: '#7C7979',
                }}>
                {'Don’t have an account?'}
              </Text>
              <TouchableOpacity onPress={handelRegister}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: 24,
                    color: '#13C7EB',
                  }}>
                  {'Register'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
