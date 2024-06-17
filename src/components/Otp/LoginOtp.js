import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Back from '../GoBack/Back';
import SolidButton from '../Buttons/SolidButton';
import {useNavigation} from '@react-navigation/native';
import Loader from '../Loader/Loader';
import axios from 'axios';

const LoginOtp = () => {
  const navigation = useNavigation();

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');

  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 0) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleHome = async () => {
    const otp = `${f1}${f2}${f3}${f4}${f5}`;
    console.log(otp);
    <Loader visible={true} />; // Show loader
    try {
      const response = await axios.post('https://auth-crem.onrender.com/api/v1/verify', {
        otp,
      });
      if (response.data.success) {
        navigation.navigate('AppNavigator');
      } else {
        alert('Invalid OTP, please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred. Please try again.');
    } finally {
      <Loader visible={false} />; // Hide loader
    }
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
                fontWeight: '600',
                fontSize: 30,
                lineHeight: 45,
                color: 'white',
              }}>
              Fill the OTP
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 24,
                color: 'white',
              }}>
              Verify your account using OTP
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
        <View
          style={{
            marginTop: responsiveHeight(5),
            marginLeft: responsiveWidth(5.5),
            gap: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: '#444343',
              fontWeight: '500',
            }}>
            OTP
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
            {[setF1, setF2, setF3, setF4, setF5].map((setFunc, index) => (
              <TextInput
                key={index}
                ref={[et1, et2, et3, et4, et5][index]}
                style={styles.inputView}
                keyboardType="number-pad"
                maxLength={1}
                value={[f1, f2, f3, f4, f5][index]}
                onChangeText={txt => {
                  setFunc(txt);
                  if (txt.length >= 1 && index < 4) {
                    [et2, et3, et4, et5][index].current.focus();
                  }
                }}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: responsiveHeight(1),
              gap: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: '500',
                  color: '#13C7EB',
                }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '500',
                color: count == 0 ? 'white' : 'black',
              }}>
              {count + ' seconds'}
            </Text>
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <SolidButton
              onClick={handleHome}
              disabled={
                f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== ''
                  ? false
                  : true
              }
              title={'LOGIN'}
              txtStyle={{
                color: 'white',
                fontWeight: '600',
                fontSize: 22,
                lineHeight: 33,
              }}
              btnstyle={{
                backgroundColor:
                  f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== ''
                    ? '#13C7EB'
                    : '#7C7979',
                width: responsiveWidth(90),
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginOtp;

const styles = StyleSheet.create({
  inputView: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#7C7979',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
  },
});
