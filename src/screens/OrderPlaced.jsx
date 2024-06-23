import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const OrderPlaced = () => {
    return (
        <ScrollView>

            <View style={{ backgroundColor: 'white', width: responsiveWidth(100), height: responsiveHeight(100) }}>
                <Image source={require('../images/tick.png')} style={{ width: responsiveWidth(100), height: responsiveHeight(30), marginTop: responsiveHeight(20) }} />
                <View>
                    <Text style={{ fontWeight: 500, fontSize: 20, lineHeight: 30, color: '#000000', alignSelf: 'center', paddingHorizontal: 22 }}>{'Your order has been successfully \n                        placed'}</Text>
                </View>
                <View style={{flexDirection:'row' , justifyContent:'center', marginTop:responsiveHeight(2), gap:5}}>
                    <Text style={{fontWeight:500 , fontSize:15 , lineHeight:22.5 , color:'black'}}>{'Go to'}</Text>
                    <TouchableOpacity>

                    <Text style={{fontWeight:500 , fontSize:15 , lineHeight:22.5 , color:'#097EEB'}}>{'My Order'}</Text>

                    </TouchableOpacity>
                  
                    <Text style={{fontWeight:500 , fontSize:15 , lineHeight:22.5 , color:'black'}}>{'section'}</Text>
                </View>
                {/* button */}
                <TouchableOpacity  style={{width:responsiveWidth(40) , height:39 , backgroundColor:'#097EEB', justifyContent:'center', borderRadius:5 , alignItems:'center', alignSelf:'center', marginTop:responsiveHeight(2)}}>
                    <Text style={{fontWeight:500 , fontSize:16 , lineHeight:24 , color:'#FFFFFF'}}>{'Go to dashboard'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default OrderPlaced