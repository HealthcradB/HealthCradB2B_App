import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'
import CustomApplyCoupan from '../components/Others/CustomApplyCoupan'


const Coupan = () => {

    //testing apply coupan
    const handelCoupan = () => {
        console.log('coupan applied...')
    }



    return (
        <ScrollView>

            <View>

                <View style={{
                    width: responsiveWidth(100),
                    height: 167,
                    backgroundColor: '#13C7EB',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}>
                    <View style={{ flexDirection: 'row', padding: 12, gap: responsiveWidth(6), marginTop: responsiveHeight(2), alignItems: 'center' }}>
                        <Back />
                        <View style={{ gap: responsiveHeight(.4) }}>
                            <Text style={{ fontWeight: 600, fontSize: 15, lineHeight: 22.5, color: '#FFFFFF' }}>{'APPLY COUPON'}</Text>
                            <View style={{ flexDirection: 'row', gap: responsiveWidth(1), alignItems: 'center' }}>
                                <Text style={{ fontWeight: 400, fontSize: 11, lineHeight: 16.5, color: '#FFFFFF' }}>{'Your Cart :'}</Text>
                                <View style={{ flexDirection: 'row', gap: responsiveWidth(1), alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 500, color: '#FFFFFF' }}>{'₹'}</Text>
                                    <Text style={{ fontWeight: 400, fontSize: 10, lineHeight: 15, color: '#FFFFFF' }}>{'22,561'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* search */}
                    <View style={{ alignSelf: 'center' }}>
                        <CustomApplyCoupan placeholder={'APPLY COUPAN'} btnStyle={{ borderWidth: 0 }} onClick={handelCoupan} />
                    </View>



                </View>

                {/* more offers and coupans */}

                <View style={{ paddingLeft: responsiveWidth(4), paddingRight: responsiveWidth(4), marginTop: responsiveHeight(2) }}>
                    <Text style={{ fontWeight: 500, fontSize: 16, lineHeight: 24, color: '#1E1E1E' }}>{'More offers'}</Text>

                    {/* coupans */}

                    <View style={{ marginTop: responsiveHeight(2) }}>

                        <View style={{ width: responsiveWidth(90), height: 193, borderRadius: 10, flexDirection: 'row', shadowColor: 1, elevation: 1, shadowOffset: 2 }}>
                            <View style={{ width: responsiveWidth(15), backgroundColor: '#097EEB', height: 193, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                                <View>
                                    <Text style={{ fontWeight: 800, fontSize: 18, lineHeight: 20.5, color: 'white', transform: [{ rotate: '270deg' }], marginTop: responsiveHeight(2) }}>{'OFF'}</Text>
                                    <Text style={{ fontWeight: 800, fontSize: 18, lineHeight: 20.5, color: 'white', transform: [{ rotate: '270deg' }], marginTop: responsiveHeight(1.7) }}>{'₹50'}</Text>
                                    <Text style={{ fontWeight: 800, fontSize: 18, lineHeight: 20.5, color: 'white', transform: [{ rotate: '270deg' }], marginTop: responsiveHeight(4) }}>{'FLAT'}</Text>
                                </View>

                            </View>
                            {/* details */}
                            <View style={{ width: responsiveWidth(75), height: 193, backgroundColor: '#FFFFFF', borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 12 }}>
                                {/* all details */}
                                <View style={{ padding: 5 }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                                        <Text style={{ fontWeight: 600, fontSize: 15, lineHeight: 20.5, color: '#1E1E1E' }}>{"TRYNEW"}</Text>
                                        <TouchableOpacity>
                                            <Text style={{ fontWeight: 500, fontSize: 15, lineHeight: 22.5, color: '#13C7EB' }}>{'APPLY'}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    {/* det */}
                                    <View style={{ marginTop: responsiveHeight(2) }}>
                                        <Text style={{ fontWeight: 400, fontSize: 12, lineHeight: 18, color: '#444343' }}>{'Add Rs. 5000 to avail this offer '}</Text>
                                        <Text style={{ fontWeight: 400, fontSize: 12, lineHeight: 18, color: '#7C7979' }}>{'Get flat Rs. 50 off '}</Text>
                                    </View>
                                    {/* ...... */}
                                    <View style={{ borderWidth: 0.5, borderColor: '#444343', justifyContent: 'center', borderStyle: 'dashed', marginTop: responsiveHeight(2.4) }}>

                                    </View>
                                    {/* details -2 */}
                                    <View>
                                        <Text style={{ fontWeight: 400, fontSize: 12, lineHeight: 18, color: '#444343', marginTop: responsiveHeight(1.7) }}>{'Use code TRYNEW & get flat Rs. 50 off on orders\nabove Rs. 4,999.'}</Text>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 10, lineHeight: 15, fontWeight: 400, alignSelf: 'flex-end', color: '#097EEB' }}>{'T&C Apply'}</Text>

                                        </TouchableOpacity>

                                    </View>




                                </View>

                            </View>

                        </View>




                    </View>
                </View>

            </View>


        </ScrollView>
    )
}

export default Coupan