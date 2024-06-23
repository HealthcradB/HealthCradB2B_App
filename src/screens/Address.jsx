import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Back from '../components/GoBack/Back'
import CustomTextInput from '../components/Others/CustomTextInput'
import { useNavigation } from '@react-navigation/native'

const Address = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('AddNewAddress')
  }
  return (
    <ScrollView>
      <View style={{ width: responsiveWidth(100), height: 71, backgroundColor: '#13C7EB', justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', gap: 25, paddingLeft: responsiveWidth(4), paddingRight: responsiveWidth(4) }}>
          <Back />
          <Text style={{ fontSize: 18, lineHeight: 27, fontWeight: 500, color: '#F0FCFF' }}>{'Add Address'}</Text>

        </View>
      </View>


      <View style={{ paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4), height: responsiveHeight(92) }}>
        {/* name */}
        <View style={{ marginTop: responsiveHeight(4) }}>
          <CustomTextInput placeholder={'Full Name (Required)*'} />
        </View>

        {/* Phone Number (Required)* */}
        <View style={{ marginTop: responsiveHeight(4) }}>
          <CustomTextInput placeholder={'Phone Number (Required)*'} />
        </View>

        {/* Pincode (Required)* & State (Required)* */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginRight: responsiveWidth(.7) }}>

          <View style={{ marginTop: responsiveHeight(4) }}>
            <CustomTextInput placeholder={'Pincode (Required)*'} btnStyle={{ width: responsiveWidth(42) }} />
          </View>

          <View style={{ marginTop: responsiveHeight(4) }}>
            <CustomTextInput placeholder={'State (Required)*'} btnStyle={{ width: responsiveWidth(42) }} />
          </View>

        </View>

        {/* City (Required)* */}
        <View style={{ marginTop: responsiveHeight(3), marginLeft: responsiveWidth(1.3) }}>
          <CustomTextInput placeholder={'City (Required)*'} btnStyle={{ width: responsiveWidth(42) }} />
        </View>

        {/* House No., Building Name (Required)* */}

        <View style={{ marginTop: responsiveHeight(3), marginLeft: responsiveWidth(1.3) }}>
          <CustomTextInput placeholder={'House No., Building Name (Required)*'} />
        </View>


        {/* Road Name, Area, Colony (Required)* */}

        <View style={{ marginTop: responsiveHeight(3), marginLeft: responsiveWidth(1.3) }}>
          <CustomTextInput placeholder={'Road Name, Area, Colony (Required)*'} />
        </View>


        {/* next button */}
        <TouchableOpacity onPress={handleSubmit} style={{
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
          }}>{"Update"}</Text>

        </TouchableOpacity>



      </View>




    </ScrollView>
  )
}

export default Address