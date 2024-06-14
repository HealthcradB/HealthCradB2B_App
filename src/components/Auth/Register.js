import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Back from '../GoBack/Back';
import CustomTextInput from '../Others/CustomTextInput';
import CustomDob from '../Others/CustomDob';
import SolidButton from '../Buttons/SolidButton';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation()


  const navigateRegisterOtp = ()=>{
    navigation.navigate('RegisterOtp')
  }
  return (
    <ScrollView>
      <View style={{backgroundColor: '#13C7EB', height: responsiveHeight(27)}}>
        <View
          style={{
            marginLeft: responsiveWidth(4),
            marginTop: responsiveHeight(5),
          }}>
          <View>
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
              REGISTER
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: 'white',
              }}>
              {'Fill some basic details and Create new account'}
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
        <View style={{marginLeft: responsiveWidth(5.5), gap: 8}}>
          {/* phone number */}
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
            <CustomTextInput placeholder={'type your phone number'} />
          </View>
          {/* name */}
          <View
            style={{
              gap: 7,
              marginTop: responsiveHeight(1.2),
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: '#444343',
              }}>
              {'Name'}
            </Text>
            <CustomTextInput placeholder={'type your name'} />
          </View>
          {/* Email */}
          <View
            style={{
              gap: 7,
              marginTop: responsiveHeight(1.2),
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: '#444343',
              }}>
              {'Email'}
            </Text>
            <CustomTextInput placeholder={'type your Email'} />
          </View>
          {/* dob and gender */}

          <View
            style={{
              flexDirection: 'row',
              gap: 30,
              marginTop: responsiveHeight(1.2),
            }}>
            {/* dob */}

            <View
              style={{
                gap: 7,
                marginTop: responsiveHeight(1),
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#444343',
                }}>
                {'Date of Birth'}
              </Text>
              <CustomDob />
            </View>

            {/* gender */}
            <View
              style={{
                gap: 7,
                marginTop: responsiveHeight(1),
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#444343',
                }}>
                {'Gender'}
              </Text>
              <CustomDob />
            </View>
          </View>

          {/* adding t&c */}

          <View style={{marginTop: responsiveHeight(1)}}>
            {/* adding checkbox */}

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#7C7979',
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 18,
                }}>
                {'By clicking you agree '}
              </Text>
              <Text
                style={{
                  color: '#13C7EB',
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 18,
                }}>
                {'to our terms and conditions'}
              </Text>
            </View>
          </View>
          {/* adding getot btn */}

          <View style={{marginTop: responsiveHeight(1)}}>
            <SolidButton
            onClick={navigateRegisterOtp}
              title={'Get Otp'}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
