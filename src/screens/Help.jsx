import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Back from '../components/GoBack/Back';
import CustomTextInput from '../components/Others/CustomTextInput';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView>
            <View style={{ paddingLeft: responsiveWidth(5), paddingRight: responsiveWidth(4) }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveWidth(5), marginTop: responsiveHeight(3) }}>
                    <Back Source={require('../images/back_blue.png')} />
                    <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 27, color: 'black' }}>{'Request a Call'}</Text>
                </View>

                <View style={{ gap: 26, height: responsiveHeight(94) }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(5) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Phone Number
                        </Text>
                        <CustomTextInput placeholder={'99878675609'} />
                    </View>

                    <View style={{ gap: 7 }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Message
                        </Text>
                        <CustomTextInput placeholder={'type message...'} btnStyle={{ height: 154 }} placeStyle={{ marginBottom: responsiveHeight(9) }} />
                    </View>
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>{"Submit"}</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={require('../images/tick.png')} />
                            <Text style={styles.modalText}>We will call you back soon.</Text>
                            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    submitButton: {
        width: responsiveWidth(100),
        height: 62,
        backgroundColor: '#13C7EB',
        position: 'absolute',
        bottom: 0,
        top: responsiveHeight(93),
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: responsiveWidth(90),
        height: 309,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#00E340',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold'
    },
});

export default Help;
