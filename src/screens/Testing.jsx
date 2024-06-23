import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const QuantitySelector = ({ options = [1, 2, 3, 4, 5], initialQuantity = 1, onValueChange }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(initialQuantity);
    const [modalVisible, setModalVisible] = useState(false);

    const handleValueChange = (quantity) => {
        setSelectedQuantity(quantity);
        setModalVisible(false);
        if (onValueChange) {
            onValueChange(quantity);
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.selectorContainer} onPress={() => setModalVisible(true)}>
                <Text style={styles.label}>QTY:</Text>
                <Text style={styles.quantity}>{selectedQuantity}</Text>
                <Text style={styles.arrow}>▼</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleValueChange(item)}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: responsiveWidth(2),
        backgroundColor: '#fff',
    },
    label: {
        color: '#13C7EB',
        fontSize: responsiveWidth(4),
        marginRight: responsiveWidth(1),
    },
    quantity: {
        color: '#333',
        fontSize: responsiveWidth(4),
    },
    arrow: {
        color: '#333',
        fontSize: responsiveWidth(4),
        marginLeft: responsiveWidth(1),
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: responsiveWidth(80),
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: responsiveWidth(5),
    },
    option: {
        padding: responsiveWidth(4),
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: responsiveWidth(4),
        textAlign: 'center',
    },
});

export default QuantitySelector;
