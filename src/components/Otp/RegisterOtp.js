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

const RegisterOtp = () => {
  const navigation = useNavigation();

  const handelHome = () => {
    navigation.navigate('AppNavigator');
  };

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
              Fill the otp
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 24,
                color: 'white',
              }}>
              {'Verify your account using otp'}
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
        {/* otp */}
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
              fontWeight: 500,
            }}>
            {'OTP'}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 18,
            }}>
            <TextInput
              ref={et1}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={f1}
              onChangeText={txt => {
                setF1(txt);
                if (txt.length >= 1) {
                  et2.current.focus();
                } else if (txt.length < 1) {
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={f2}
              onChangeText={txt => {
                setF2(txt);
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={f3}
              onChangeText={txt => {
                setF3(txt);
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={f4}
              onChangeText={txt => {
                setF4(txt);
                if (txt.length >= 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et4.current.focus();
                }
              }}
            />
            <TextInput
              ref={et5}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={f5}
              onChangeText={txt => {
                setF5(txt);
                if (txt.length >= 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et4.current.focus();
                }
              }}
            />
          </View>

          {/* resend otp */}

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
                  fontWeight: 500,
                  color: '#13C7EB',
                }}>
                {'Resend Otp'}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                fontWeight: 500,
                color: count == 0 ? 'white' : 'black',
              }}>
              {count + '   seconds'}
            </Text>
          </View>

          {/* button */}
          <View style={{marginTop: responsiveHeight(3)}}>
            <SolidButton
              disabled={
                f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== ''
                  ? false
                  : true
              }
              title={'REGISTER'}
              onClick={handelHome}
              txtStyle={{
                color: 'white',
                fontWeight: 600,
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

export default RegisterOtp;

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
