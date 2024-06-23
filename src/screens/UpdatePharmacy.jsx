import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Back from '../components/GoBack/Back';
import CustomTextInput from '../components/Others/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import BuyerSelectionModal from '../components/Others/BuyerSelectionModal';
import CustomImagePicker from '../components/Others/CustomImagePicker';

const UpdatePharmacy = () => {
  const navigation = useNavigation();
  const [isBuyerModalVisible, setBuyerVisible] = useState(false);
  const [buyer, setBuyer] = useState('');
  const [drugLicenseImageUri, setDrugLicenseImageUri] = useState('');
  const [drugLicenseImageName, setDrugLicenseImageName] = useState('');
  const [step, setStep] = useState(1);

  const handleSelectBuyer = (selectedBuyer) => {
    setBuyer(selectedBuyer);
    setBuyerVisible(false);
  };

  const handleImagePick = (uri, name) => {
    setDrugLicenseImageUri(uri);
    setDrugLicenseImageName(name);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  //form submit
  const handleSubmit = () => {



  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#13C7EB', height: responsiveHeight(27) }}>
        <View
          style={{
            marginLeft: responsiveWidth(4),
            marginTop: responsiveHeight(5),
          }}>
          <View>
            <Back />
          </View>
          <View style={{ marginTop: responsiveHeight(5) }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 30,
                lineHeight: 45,
                color: 'white',
              }}>
              Update Pharmacy
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 24,
                color: 'white',
              }}>
              {step === 1 ? 'Basic Details' : 'Address Details'}
            </Text>
          </View>
        </View>
      </View>
      {/* first deatails */}

      {step === 1 && (
        <>
          <View
            style={{
              backgroundColor: 'white',
              height: responsiveHeight(83),
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              marginTop: responsiveHeight(-2),
            }}>
            <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
              <View style={{ gap: 7, marginTop: responsiveHeight(5) }}>
                <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                  Shop Name
                </Text>
                <CustomTextInput placeholder={'name'} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Buyer Type</Text>
                <TouchableOpacity onPress={() => setBuyerVisible(true)}>
                  <View style={styles.buyerSelector}>
                    <Text>{buyer ? buyer : 'Choose Type'}</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Drug License Number</Text>
                <CustomTextInput placeholder={'Licence Number'} />
              </View>


              {/* drug licence image upload */}
              <View>
                <CustomImagePicker onImagePick={handleImagePick}
                  btnStyle={{
                    marginRight: responsiveWidth(4),
                    marginTop: responsiveHeight(-0.4)
                  }} />

              </View>

              {/* gst number (optional) */}

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>GST Number (Optional)</Text>
                <CustomTextInput placeholder={'gst number'} />
              </View>

            </View>

            {/* next button */}
            <TouchableOpacity onPress={handleNext} style={{
              width: responsiveWidth(100),
              height: 62,
              backgroundColor: '#13C7EB',
              position: 'absolute',
              bottom: 0,
              top: responsiveHeight(75.8),
              justifyContent: 'center',
              alignItems: 'center'



            }}>
              <Text style={{
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 30,
                color: 'white'
              }}>{"Next"}</Text>

            </TouchableOpacity>


          </View>
        </>

      )}

      {step === 2 && (
        <>
          <View
            style={{
              backgroundColor: 'white',
              height: responsiveHeight(76),
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              marginTop: responsiveHeight(-2),
            }}>
            <View>

              {/* shop location */}

              <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                <View style={{ gap: 7, marginTop: responsiveHeight(5) }}>
                  <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                    Shop Location
                  </Text>
                  <CustomTextInput placeholder={'add full address...'} btnStyle={{ height: 154 }} placeStyle={{ marginBottom: responsiveHeight(9) }} />
                </View>

                {/* landmark */}

                <View style={{ gap: 7, marginTop: responsiveHeight(-0.3) }}>
                  <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                    Landmark
                  </Text>
                  <CustomTextInput placeholder={'landmark'} />
                </View>


                {/* pincode */}

                <View style={{ gap: 7, marginTop: responsiveHeight(-0.3) }}>
                  <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                    Pincode
                  </Text>
                  <CustomTextInput placeholder={'pincode'} />
                </View>






              </View>
            </View>

            {/* next button */}
            <TouchableOpacity onPress={handleSubmit} style={{
              width: responsiveWidth(100),
              height: 62,
              backgroundColor: '#13C7EB',
              position: 'absolute',
              bottom: 0,
              top: responsiveHeight(68.9),
              justifyContent: 'center',
              alignItems: 'center'



            }}>
              <Text style={{
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 30,
                color: 'white'
              }}>{"Update"}</Text>

            </TouchableOpacity>
          </View>


        </>
      )}



      <BuyerSelectionModal
        isVisible={isBuyerModalVisible}
        onClose={() => setBuyerVisible(false)}
        onSelectBuyer={handleSelectBuyer}
      />
    </ScrollView>
  );
};

export default UpdatePharmacy;

const styles = StyleSheet.create({
  inputGroup: {
    gap: 7,
    width: responsiveWidth(90),
  },
  inputLabel: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#444343',
  },
  buyerSelector: {
    width: responsiveWidth(90),
    height: 55,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  imageName: {
    marginTop: 10,
    fontSize: 16,
    color: '#444343',
  },
});
