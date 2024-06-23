import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Back from '../components/GoBack/Back'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const AddNewAddress = () => {
  return (
    <ScrollView>
      <View style={{width:responsiveWidth(100), height:71 , backgroundColor:'#13C7EB', justifyContent:"center"}}>
        <View style={{ flexDirection:'row' , gap:25, paddingLeft:responsiveWidth(4) , paddingRight:responsiveWidth(4)}}>
        <Back/>
        <Text style={{fontSize:18 , lineHeight:27, fontWeight:500 , color:'#F0FCFF'}}>{'Select Address'}</Text>

        </View>
      </View>
    </ScrollView>
  )
}

export default AddNewAddress