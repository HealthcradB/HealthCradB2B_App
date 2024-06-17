import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Back from '../GoBack/Back';
import CustomTextInput from '../Others/CustomTextInput';
import CustomDob from '../Others/CustomDob';
import SolidButton from '../Buttons/SolidButton';
import { useNavigation } from '@react-navigation/native';
import GenderSelectionModal from '../Others/GenderSelectionModal';
import Loader from '../Loader/Loader';

const Register = () => {
  const navigation = useNavigation();

  const [phone, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [isGenderModalVisible, setGenderModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phone: '',
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });

  const handleDobChange = (date) => {
    setDob(date);
  };

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
    setGenderModalVisible(false);
  };

  const validateForm = () => {
    let valid = true;
    const phoneNumberPattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      phone: '',
      name: '',
      email: '',
      dateOfBirth: '',
      gender: '',
    };

    if (!phoneNumberPattern.test(phone)) {
      newErrors.phone = 'Invalid phone number';
      valid = false;
    }
    if (name.length === 0) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (dateOfBirth.length === 0) {
      newErrors.dateOfBirth = 'Date of birth is required';
      valid = false;
    }
    if (gender.length === 0) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const data = {
    phone,
    name,
    email,
    dateOfBirth,
    gender,
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      Alert.alert('Invalid Input', 'Please fill all fields correctly.');
      return;
    }

    setLoading(true);
    navigation.navigate('RegisterOtp')

    try {
      const response = await fetch('https://auth-crem.onrender.com/api/v1/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

    
      if (responseData.success) {
        navigation.navigate('RegisterOtp');
      } else {
        Alert.alert('Registration Failed', responseData.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('An error occurred', 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const allFieldsFilled = () => {
    return phone.length > 0 && name.length > 0 && email.length > 0 && dateOfBirth.length > 0 && gender.length > 0;
  };

  return (
    <ScrollView>
      <Loader visible={loading} />
      <View style={{ backgroundColor: '#13C7EB', height: responsiveHeight(27) }}>
        <View style={{ marginLeft: responsiveWidth(4), marginTop: responsiveHeight(5) }}>
          <Back />
          <View style={{ marginTop: responsiveHeight(5) }}>
            <Text style={styles.headerText}>REGISTER</Text>
            <Text style={styles.subHeaderText}>Fill some basic details and Create new account</Text>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={{ marginLeft: responsiveWidth(5.5), gap: 8, marginTop: responsiveHeight(2) }}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <CustomTextInput
              placeholder="Type your phone number"
              value={phone}
              onChangeText={setPhoneNumber}
              keyboardType="number-pad"
              maxLength={10}
            />
            {errors.phone !== '' && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Name</Text>
            <CustomTextInput
              placeholder="Type your name"
              value={name}
              onChangeText={setName}
            />
            {errors.name !== '' && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <CustomTextInput
              placeholder="Type your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {errors.email !== '' && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Date of Birth</Text>
              <CustomDob onDateSelected={handleDobChange} />
              {errors.dateOfBirth !== '' && (
                <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
              )}
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Gender</Text>
              <TouchableOpacity onPress={() => setGenderModalVisible(true)}>
                <View style={styles.genderSelector}>
                  <Text>{gender ? gender : 'Select Gender'}</Text>
                </View>
              </TouchableOpacity>
              {errors.gender !== '' && (
                <Text style={styles.errorText}>{errors.gender}</Text>
              )}
            </View>
          </View>
          <View style={{ marginTop: responsiveHeight(1) }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.termsText}>By clicking you agree </Text>
              <Text style={styles.linkText}>to our terms and conditions</Text>
            </View>
          </View>
          <View style={{ marginTop: responsiveHeight(1) }}>
            <SolidButton
              onClick={handleRegister}
              disabled={!allFieldsFilled()}
              title="Get Otp"
              txtStyle={styles.buttonText}
              btnstyle={[styles.button, !allFieldsFilled() && styles.disabledButton]}
            />
          </View>
        </View>
      </View>

      <GenderSelectionModal
        isVisible={isGenderModalVisible}
        onClose={() => setGenderModalVisible(false)}
        onSelectGender={handleSelectGender}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 45,
    color: 'white',
  },
  subHeaderText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  formContainer: {
    backgroundColor: 'white',
    height: responsiveHeight(100),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: responsiveHeight(-2),
  },
  inputGroup: {
    gap: 7,
    marginTop: responsiveHeight(1.2),
  },
  inputLabel: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#444343',
  },
  row: {
    flexDirection: 'row',
    gap: 30,
    marginTop: responsiveHeight(1.2),
  },
  genderSelector: {
    width: responsiveWidth(41),
    height: 55,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  termsText: {
    color: '#7C7979',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  linkText: {
    color: '#13C7EB',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#13C7EB',
    width: responsiveWidth(90),
  },
  disabledButton: {
    backgroundColor: '#7C7979',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default Register;
