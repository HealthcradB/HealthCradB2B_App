import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const orders = [
    { id: '1', status: 'Order Confirmed', items: '5 Items (Medicines)', date: '29 April 2024' },
    { id: '2', status: 'Delivered', items: '12 Items (Medicines)', date: '25 April 2024', subDate: '22 April 2024', color: 'green' },
    { id: '3', status: 'Cancelled', items: '25 Items (Medicines)', date: '15 March 2024', subDate: '12 March 2024', color: 'red' },
    { id: '4', status: 'Order Shipped', items: '30 Items (Medicines)', date: '04 March 2024' },
];

const MyOrders = () => {
    const [filteredOrders, setFilteredOrders] = useState(orders);

    const filterByDate = () => {
        // Implement your filter logic here
        // This example just sorts by date as a placeholder
        const sortedOrders = [...orders].sort((a, b) => new Date(a.date) - new Date(b.date));
        setFilteredOrders(sortedOrders);
    };

    const renderItem = ({ item }) => (
        <View style={styles.orderContainer}>
            <View style={styles.orderDetails}>
                <Image source={require('../images/medicine.png')} style={styles.orderIcon} />
                <View style={styles.orderText}>
                    <Text style={styles.orderStatus}>{item.status}</Text>
                    <Text style={styles.orderItems}>{item.items}</Text>
                    {item.subDate && (
                        <Text style={{ ...styles.orderSubDate, color: item.color }}>{`on ${item.date}`}</Text>
                    )}
                    <Text style={styles.orderDate}>{item.subDate || item.date}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.arrowIconContainer}>
                <Image source={require('../images/back_blue.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Orders</Text>
                <TouchableOpacity style={styles.filterButton} onPress={filterByDate}>
                    <Text style={styles.filterText}>Filter by date</Text>
                    <Image source={require('../images/calender.png')} style={styles.calendarIcon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredOrders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsiveWidth(5),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        fontSize: 16,
        color: '#13C7EB',
    },
    calendarIcon: {
        width: 24,
        height: 24,
        marginLeft: 5,
    },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
    },
    orderDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    orderText: {
        flexDirection: 'column',
    },
    orderStatus: {
        fontSize: 16,
        fontWeight: '500',
    },
    orderItems: {
        fontSize: 14,
        color: '#7C7979',
    },
    orderSubDate: {
        fontSize: 14,
        fontWeight: '500',
    },
    orderDate: {
        fontSize: 14,
        color: '#B1B1B1',
    },
    arrowIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
        width: 20,
        height: 20,
    },
});

export default MyOrders;
