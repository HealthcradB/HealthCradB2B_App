import { View, Text, ScrollView, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'

const Mycart = () => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const quantities = [...Array(10).keys()].map(i => i + 1);

    return (
        <ScrollView>
            <View style={{ width: responsiveWidth(100), height: responsiveHeight(100) }}>
                <View style={{ width: responsiveWidth(100), height: 71, backgroundColor: '#13C7EB', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(4) }}>
                        <Back />
                        <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 27, color: 'white', paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>{'My Cart'}</Text>
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

                {/* products */}
                <View style={{ marginTop: responsiveHeight(2) }}>
                    <View style={{ width: responsiveWidth(100), height: 159, backgroundColor: '#FFFFFF' }}>
                        <View style={{ padding: 12, flexDirection: 'row', marginLeft: responsiveWidth(4) }}>
                            {/* section -1 */}
                            <View style={{ gap: 3 }}>
                                <Image source={require('../images/medicine.png')} />

                                <TouchableOpacity 
                                    style={{
                                        borderWidth: 0.5, 
                                        width: responsiveWidth(20), 
                                        height: 28.45, 
                                        borderRadius: 5, 
                                        marginTop: responsiveHeight(0.4), 
                                        marginBottom: responsiveHeight(0.4), 
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 21, color: '#13C7EB' }}>{`QTY: ${selectedQuantity}`}</Text>
                                </TouchableOpacity>
                                
                                <Text style={{ fontWeight: '500', fontSize: 8, lineHeight: 12, color: '#7C7979' }}>{'(Inc. GST)'}</Text>
                            </View>

                            {/* section -2 */}
                            <View style={{ marginLeft: responsiveWidth(7) }}>
                                <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 21, color: '#1E1E1E' }}>{'COMBIFLAM TABS'}</Text>

                                <View style={{ flexDirection: 'row', marginTop: responsiveHeight(1) }}>
                                    <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 18, color: 'black' }}>{'Marketer :  '}</Text>
                                    <Text>{'Cipla'}</Text>
                                </View>

                                {/* cut & discount */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(1) }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: '500', fontSize: 13, lineHeight: 19.5, color: '#444343' }}>{'MRP :'}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21.5, color: 'black' }}>{'₹ 22.60  |   '}</Text>
                                    </View>

                                    {/* off */}
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: '500', lineHeight: 19.5, fontSize: 13, color: '#444343' }}>{"OFF : "}</Text>
                                        <Text style={{ fontWeight: '600', fontSize: 15, lineHeight: 22.5, color: '#00C013' }}>{'25.03 %'}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* section - 3 */}
                        {/* down */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
                            <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                                <Image source={require('../images/delivary.png')} />
                                <View style={{ flexDirection: 'row', gap: 12 }}>
                                    <Text style={{ fontWeight: '500', fontSize: 11, lineHeight: 16.5, color: 'black' }}>{'Express'}</Text>
                                    <Text style={{ fontWeight: '300', fontSize: 11, lineHeight: 16.5, color: '#444343' }}>{'Delivery within 3 to 4 days'}</Text>
                                </View>
                            </View>
                            <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 18, color: '#B1B1B1' }}>{'10 x 6'}</Text>
                        </View>
                    </View>
                </View>

                {/* bottom */}
                <View style={{width:responsiveWidth(100) , height:59 , backgroundColor:'white' , top:380,  justifyContent:'center'}}>
                    <View style={{flexDirection:'row' , justifyContent:'center',  alignItems:'center' , gap:responsiveWidth(2)}}>
                    <Image source={require('../images/black_shield.png')}/>
                    <Text>{'Safe and secure payments. Easy returns.\n100% Authentic products.'}</Text>
                    </View>
                   

                </View>

                {/* payment */}
                <View style={{top:385}}>
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
        <Text style={{fontWeight: 500, fontSize: 18, color: 'black'}}>
          {'Rs 2000'}
        </Text>
        <TouchableOpacity onPress={()=>{}}
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
          <Text style={{fontWeight: 500, fontSize: 16, color: 'white'}}>
            Proceed
          </Text>
          <Image source={require('../images/arrow.png')} />
        </TouchableOpacity>
      </View>
                </View>

                {/* Quantity Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                        <View style={{
                            width:responsiveWidth(100),
                            padding:12,
                            backgroundColor: 'white',
                        
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}>
                            <Text style={{ marginBottom: 15, textAlign: 'center', fontSize: 18, fontWeight: '500', color:'black' }}>Select Quantity</Text>
                            <FlatList
                                data={quantities}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={{
                                            padding: 10,
                                            width: responsiveWidth(60),
                                            alignItems: 'center',
                                            borderBottomWidth: 0.6,
                                            borderBottomColor: '#eee'
                                        }}
                                        onPress={() => {
                                            setSelectedQuantity(item);
                                            setModalVisible(false);
                                        }}
                                    >
                                        <Text style={{ fontSize: 18 , color:'black'}}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.toString()}
                            />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#10CAF2',
                                    borderRadius: 4,
                                    padding: 10,
                                    width:responsiveWidth(90),
                                    height:40,
                                    elevation: 2,
                                    marginTop: 15
                                }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize:17 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default Mycart
