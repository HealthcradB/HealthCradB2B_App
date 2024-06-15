import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const SelectGender = ({ isVisible, onClose, onSelectGender }) => {
  return (
    <View
    style={{
      width: responsiveWidth(41),
      height: 55,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      justifyContent: 'center',
      paddingLeft: responsiveWidth(5),
      paddingRight: responsiveWidth(5),
    }}>
   <Text>selct gender</Text>

   <View>
   <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Select Gender</Text>
        <TouchableOpacity style={styles.option} onPress={() => onSelectGender('Male')}>
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => onSelectGender('Female')}>
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => onSelectGender('Other')}>
          <Text style={styles.optionText}>Other</Text>
        </TouchableOpacity>
      </View>
    </Modal>
   </View>
  </View>
  )
}

export default SelectGender

const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    option: {
      paddingVertical: 10,
    },
    optionText: {
      fontSize: 16,
    },
  });