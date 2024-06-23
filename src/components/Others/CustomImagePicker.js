import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';

const CustomImagePicker = ({ onImagePick , btnStyle}) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [tempImageUri, setTempImageUri] = useState('');
  const [tempImageName, setTempImageName] = useState('');

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const selectedImage = response.assets[0];
        setTempImageUri(selectedImage.uri);
        setTempImageName(selectedImage.fileName);
        setPreviewVisible(true);
      }
    });
  };

  const handleConfirmImage = () => {
    onImagePick(tempImageUri, tempImageName);
    setPreviewVisible(false);
  };

  return (
    <View style={[styles.container , btnStyle]}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Drug License Number Image</Text>
        <TouchableOpacity onPress={handleSelectImage}>
          <View style={styles.imageSelector } >
            <Text>{tempImageName ? tempImageName : 'upload image'}</Text>
            <Image source={require('../../images/upload.png')} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal isVisible={previewVisible} onBackdropPress={() => setPreviewVisible(false)}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: tempImageUri }} style={styles.modalImage} />
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmImage}>
            <Text style={styles.confirmButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CustomImagePicker;

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalImage: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    resizeMode: 'contain',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#13C7EB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageSelector: {
    width: responsiveWidth(90),
    height: 55,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
    flexDirection: 'row',
    
  } ,
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
});
