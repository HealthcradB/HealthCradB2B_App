import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'
import { useNavigation } from '@react-navigation/native'

const OrderSummery = () => {
    const navigation = useNavigation()

    const [selectedMode, setSelectedMode] = useState('full');

    const handelCoupan = () => {
        navigation.navigate('coupan')
    }



    return (
        <ScrollView >

           
                <View style={{ width: responsiveWidth(100), height: 71, backgroundColor: '#13C7EB', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(4) }}>
                        <Back />
                        <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 27, color: 'white', paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>{'Order Summary'}</Text>
                    </View>
                </View>

                {/* address */}

                <View
                    style={{
                        width: responsiveWidth(100),
                        height: 86,
                        backgroundColor: 'white',
                        borderWidth: 0.5,
                        marginTop: 10,
                        borderColor: '#D9D9D9',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 12,
                        }}>
                        <View>
                            <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#1E1E1E' }}>
                                    {'Deliver To :'}
                                </Text>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>
                                    {'Om Shankar Sh...  , 848125'}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#7C7979',
                                    lineHeight: 21,
                                }}>
                                {'Sharda Nagar (Banti Kirana Store), Purn..'}
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{
                                    width: 93,
                                    height: 37,
                                    borderRadius: 8,
                                    borderWidth: 0.5,
                                    borderColor: '#B1B1B1',
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#13C7EB' }}>
                                    {'Change'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



                {/* price breakdown */}

                <View style={{ width: responsiveWidth(100), height: 298, backgroundColor: 'white', marginTop: responsiveHeight(2) }}>

                    <View style={{ padding: 20 }}>

                        <Text style={{ fontWeight: 500, fontSize: 16, lineHeight: 24, color: '#1E1E1E' }}>{'Price Details'}</Text>

                        <View>

                            {/* one */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(2.5) }}>
                                <Text style={{ fontWeight: 300, fontSize: 14, lineHeight: 21, color: 'black' }}>{'Total Item cost'}</Text>
                                <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'₹ 24,546'}</Text>
                            </View>
                            {/* two */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <Text style={{ fontWeight: 300, fontSize: 14, lineHeight: 21, color: 'black' }}>{'Special Price'}</Text>
                                <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'₹ 22,546'}</Text>
                            </View>
                            {/* three */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <Text style={{ fontWeight: 300, fontSize: 14, lineHeight: 21, color: 'black' }}>{'Green Packaging'}</Text>
                                <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'₹ 10'}</Text>
                            </View>
                            {/* four */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <Text style={{ fontWeight: 300, fontSize: 14, lineHeight: 21, color: 'black' }}>{'Handling Fee'}</Text>
                                <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'₹ 30'}</Text>
                            </View>
                            {/* five */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <Text style={{ fontWeight: 300, fontSize: 14, lineHeight: 21, color: 'black' }}>{'Delivery Charges'}</Text>
                                <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 22.5, color: '#00C013' }}>{'Free Delivery'}</Text>
                            </View>

                            {/* line */}
                            <View style={{ borderWidth: 0.5, borderColor: '#B1B1B1', marginTop: responsiveHeight(2.6), marginBottom: responsiveHeight(1) }}>

                            </View>


                            {/* total price */}


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                <Text style={{ fontWeight: 500, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'Total Price'}</Text>
                                <Text style={{ fontWeight: 500, fontSize: 15, lineHeight: 22.5, color: 'black' }}>{'₹ 22,561'}</Text>
                            </View>



                        </View>


                    </View>

                </View>


                {/* apply coupan */}

                <View style={{ width: responsiveWidth(100), height: 64, backgroundColor: 'white', marginTop: responsiveHeight(2), justifyContent: 'center' }}>

                    <TouchableOpacity onPress={handelCoupan} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
                        <Text style={{ fontWeight: 500, fontSize: 15, lineHeight: 22.5, color: '#1E1E1E' }}>{'APPLY COUPAN'}</Text>
                        <Image source={require('../images/back_black.png')} />
                    </TouchableOpacity>


                </View>


                {/*  payments*/}

                <View style={{ width: responsiveWidth(100), height: 175, backgroundColor: 'white', marginTop: responsiveHeight(2) }}>


                    <View style={{ padding: 16 }}>



                        {/* payment img and stuff */}

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={require('../images/payment.png')} />
                            <Text style={{ fontWeight: 500, fontSize: 16, lineHeight: 24, color: '#1E1E1E' }}>{'Payment Mode'}</Text>

                        </View>

                        {/* select payment */}

                        <View style={{ marginTop: responsiveHeight(1) }}>

                            <TouchableOpacity
                                onPress={() => setSelectedMode('full')}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 15,
                                    borderWidth: 1,
                                    borderColor: selectedMode === 'full' ? '#13C7EB' : '#D9D9D9',
                                    borderRadius: 5,
                                    marginBottom: 10,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: '#13C7EB',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: 10,
                                        }}
                                    >
                                        {selectedMode === 'full' && <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#13C7EB' }} />}
                                    </View>
                                    <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21, color: '#4A4141' }}>Full Payment</Text>
                                </View>
                                <Text style={{ color: '#097EEB', fontWeight: 400, fontSize: 13, lineHeight: 19.5 }}>(full online pay)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setSelectedMode('half')}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 15,
                                    borderWidth: 1,
                                    borderColor: selectedMode === 'half' ? '#13C7EB' : '#D9D9D9',
                                    borderRadius: 5,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: '#13C7EB',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: 10,
                                        }}
                                    >
                                        {selectedMode === 'half' && <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#13C7EB' }} />}
                                    </View>
                                    <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21, color: '#4A4141' }}>50% Pay On Delivery</Text>
                                </View>
                                <Text style={{ color: '#097EEB', fontWeight: 400, fontSize: 13, lineHeight: 19.5 }}>(50% online pay)</Text>
                            </TouchableOpacity>


                        </View>


                        {/* cancellation */}

                        <View style={{ width: responsiveWidth(100), height: 72, backgroundColor: 'white', marginTop: responsiveHeight(2), justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Image source={require('../images/btn.png')} />
                                <View>
                                    <Text style={{ fontWeight: 600, fontSize: 11, lineHeight: 16.5, color: 'black' }}>{'Cancellation is allowed up to 24 hours after placing the order.'}</Text>
                                    <TouchableOpacity>
                                        <Text style={{ fontWeight: 600, fontSize: 11, lineHeight: 16.5, color: '#097EEB' }}>{'Know more'}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>



                        </View>
                    </View>

                    {/* proceed to pay */}

                    <View style={{marginTop:responsiveHeight(90)}}>
                        <View
                            style={{
                                width: responsiveWidth(100),
                                height: 60,
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: '#D9D9D9',
                                marginTop: 2,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 12,
                                flexDirection: 'row',
                            }}>
                            <Text style={{ fontWeight: 500, fontSize: 18, color: 'black' }}>
                                {'Rs 2000'}
                            </Text>
                            <TouchableOpacity onPress={() => { }}
                                style={{
                                    width: 150,
                                    height: 40,
                                    borderRadius: 5,
                                    backgroundColor: '#097EEB',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 12,
                                }}>
                                <Text style={{ fontWeight: 500, fontSize: 16, color: 'white' }}>
                                    Proceed
                                </Text>
                                <Image source={require('../images/arrow.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>


          


        </ScrollView>
    )
}

export default OrderSummery