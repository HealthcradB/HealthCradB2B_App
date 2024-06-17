import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CustomOrder = ({Style1,source,txt1,txt2,txtStyle,style2}) => {
  return (
    <View style={[{
        width: responsiveWidth(42),
        height: 85,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#B1B1B1',
        backgroundColor: '#00C013'
      },Style1]}>
        <View style={{ flexDirection: 'row', gap: 12 }}>

          <View style={[{
            backgroundColor: 'white',
            borderColor: '#B1B1B1',
            width: 73,
            height: 84.9,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center'
          },style2]}>
            <Image source={source ? source : require('../../images/whatup.png')} />

          </View>

          <View style={{ gap: 5, marginTop: responsiveHeight(.4) }}>
            <Text style={{ fontSize: 14, lineHeight: 21, fontWeight: 500, color: 'white' }}>{txt1}</Text>
            <TouchableOpacity 
              style={{ width:responsiveWidth(17), height: 23, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[{ fontSize: 14, fontWeight: 500, lineHeight: 21, color: '#00C013' },txtStyle]}>{txt2}</Text>
            </TouchableOpacity>

          </View>



        </View>

      </View>
  )
}

export default CustomOrder