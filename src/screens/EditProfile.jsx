import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'
import CustomTextInput from '../components/Others/CustomTextInput'
import { useNavigation } from '@react-navigation/native'

const EditProfile = () => {
    const navigation = useNavigation()
    return (
        <ScrollView  >
            <View style={{ width: responsiveWidth(100), height: 71, backgroundColor: '#13C7EB', justifyContent: 'center' }}>
                <View style={{ marginLeft: responsiveWidth(4), flexDirection: 'row', alignItems: 'center' }}>

                    <Back />
                    <Text style={{ fontSize: 18, fontWeight: 500, lineHeight: 27, color: 'white', paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>{'Edit Profile'}</Text>

                </View>

            </View>



            {/* edit profile */}

            <View style={{ height: responsiveHeight(91.8) }}>

                {/* shop name */}

                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(3) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Shop Name
                        </Text>
                        <CustomTextInput placeholder={'Shop name'} />
                    </View>
                </View>


                {/* contanct number */}
                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(2) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Contact Number
                        </Text>
                        <CustomTextInput placeholder={'9939456248'} />
                    </View>
                </View>

                {/* email */}

                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(2) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Email
                        </Text>
                        <CustomTextInput placeholder={'xyz541@gmail.com'} />
                    </View>
                </View>

                {/* secondary number */}

                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(2) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Secondary Number
                        </Text>
                        <CustomTextInput placeholder={'secondary numbers'} />
                    </View>
                </View>


                {/* ADDRESS */}

                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(2) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            Address
                        </Text>
                        <CustomTextInput placeholder={'add address'} />
                    </View>
                </View>

                {/* gst numebr */}


                <View style={{ marginLeft: responsiveWidth(5.5), gap: 26 }}>
                    <View style={{ gap: 7, marginTop: responsiveHeight(2) }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#444343' }}>
                            GST Number
                        </Text>
                        <CustomTextInput placeholder={'drug license number'} />
                    </View>
                </View>



                {/* next button */}
                <TouchableOpacity style={{
                    width: responsiveWidth(100),
                    height: 62,
                    backgroundColor: '#13C7EB',
                    position: 'absolute',
                    bottom: 0,
                    top: responsiveHeight(85),
                    justifyContent: 'center',
                    alignItems: 'center'



                }}>
                    <Text style={{
                        fontWeight: 500,
                        fontSize: 20,
                        lineHeight: 30,
                        color: 'white'
                    }}>{"Update Pharmacy"}</Text>

                </TouchableOpacity>




            </View>





        </ScrollView>
    )
}

export default EditProfile