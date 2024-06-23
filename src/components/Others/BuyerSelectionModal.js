import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const BuyerSelectionModal = ({ isVisible, onClose, onSelectBuyer }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Select Buyer</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => onSelectBuyer('Shopkeeper')}>
          <Text style={styles.optionText}>ShopKeeper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => onSelectBuyer('Customer')}>
          <Text style={styles.optionText}>Customer</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BuyerSelectionModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});