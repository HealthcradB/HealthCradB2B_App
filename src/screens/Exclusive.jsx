import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from '../components/GoBack/Back'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const Exclusive = () => {
    const navigation = useNavigation()

    const handelBrand = ()=>{
        navigation.navigate('Brand')
    }


    return (
        <ScrollView style={{ paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>

            <View style={{ marginTop: responsiveHeight(5) }}>
                {/* exclusive */}
                <View style={{ gap: responsiveHeight(2.4) }}>
                    <Back Source={require('../images/back_blue.png')} />
                    <Text style={{ fontWeight: 500, fontSize: 20, lineHeight: 30, color: 'black' }}>{'Exclusive Brands'}</Text>

                </View>

                {/* medicines */}

                <View style={{ marginTop: responsiveHeight(3) , flexDirection:'row', gap:responsiveWidth(6)}}>

                    {/* med-1 */}

                    <TouchableOpacity  onPress={handelBrand} style={{
                        width: responsiveWidth(42),
                        height: 59,
                        backgroundColor: '#F5FFFD',
                        borderRadius: 8,
                        shadowColor: '#00000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>

                        <Text style={{fontWeight:400, fontSize:15 , lineHeight:22.5 , color:'#097EEB'}}>{'Aitne Pharma'}</Text>

                    </TouchableOpacity>

                    {/* med -2 */}

                    <TouchableOpacity style={{
                        width: responsiveWidth(42),
                        height: 59,
                        backgroundColor: '#F5FFFD',
                        borderRadius: 8,
                        shadowColor: '#00000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>

                        <Text style={{fontWeight:400, fontSize:15 , lineHeight:22.5 , color:'#097EEB'}}>{'Aitne Pharma'}</Text>

                    </TouchableOpacity>


                </View>


            </View>

        </ScrollView>
    )
}

export default Exclusive