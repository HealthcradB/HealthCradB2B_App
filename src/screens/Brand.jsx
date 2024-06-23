import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'
import { useNavigation } from '@react-navigation/native'


const Brand = () => {

    const navigation = useNavigation()

    const handelMedSearch = () => {
        navigation.navigate('SearchMedicine')
    }


    return (

        <ScrollView style={{
            paddingLeft: responsiveWidth(4),
            paddingRight: responsiveWidth(4)
        }}>
            <View style={{ marginTop: responsiveHeight(5) }}>

                {/* brand */}
                <View style={{ gap: responsiveHeight(2.4) }}>
                    <Back Source={require('../images/back_blue.png')} />
                    <Text style={{
                        fontWeight: 500,
                        fontSize: 20, lineHeight: 30,
                        color: 'black'
                    }}>{'Top Brands'}</Text>

                </View>

                {/* brand images and name */}

                <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', gap: responsiveWidth(2) }}>

                    {/* brand-1 */}

                    <TouchableOpacity onPress={handelMedSearch} style={{
                        width: responsiveWidth(29.5),
                        height: 124,
                        backgroundColor: 'white',
                        borderRadius: 5, borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        {/* <Image /> */}

                        <Image source={require('../images/cipla.png')} />

                        <Text style={{ fontSize: 14, fontWeight: 500, lineHeight: 21, color: '#1E1E1E', marginTop: responsiveHeight(1) }}>{'Shop Now >'}</Text>



                    </TouchableOpacity>

                    {/* brand - 2 */}

                    <TouchableOpacity style={{
                        width: responsiveWidth(29.5),
                        height: 124,
                        backgroundColor: 'white',
                        borderRadius: 5, borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        {/* <Image /> */}

                        <Image source={require('../images/cipla.png')} />

                        <Text style={{ fontSize: 14, fontWeight: 500, lineHeight: 21, color: '#1E1E1E', marginTop: responsiveHeight(1) }}>{'Shop Now >'}</Text>



                    </TouchableOpacity>

                    {/* brand - 3 */}

                    <TouchableOpacity style={{
                        width: responsiveWidth(29.5),
                        height: 124,
                        backgroundColor: 'white',
                        borderRadius: 5, borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        {/* <Image /> */}

                        <Image source={require('../images/cipla.png')} />

                        <Text style={{ fontSize: 14, fontWeight: 500, lineHeight: 21, color: '#1E1E1E', marginTop: responsiveHeight(1) }}>{'Shop Now >'}</Text>



                    </TouchableOpacity>


                </View>





            </View>

        </ScrollView>

    )
}

export default Brand