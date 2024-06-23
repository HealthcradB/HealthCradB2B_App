import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomSearch from '../components/Others/CustomSearch'

const SearchMedicine = () => {
  return (
    <ScrollView style={{ paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>

<View style={{ marginTop: responsiveHeight(2.5), marginBottom: responsiveHeight(2) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../images/app_logo.png')} />
          <Image style={{ marginRight: responsiveHeight(1.5) }} source={require('../images/btn.png')} />
        </View>

        {/* Red dot */}
        <View
          style={{
            backgroundColor: '#FF0000',
            width: responsiveWidth(5),
            height: responsiveWidth(5),
            borderRadius: 99,
            position: 'absolute',
            left: responsiveWidth(84),
            top: responsiveHeight(-0.5),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21, color: 'white' }}>{'2'}</Text>
        </View>

        <View style={{ marginTop: responsiveHeight(2) }}>
          <CustomSearch placeholder={'search medicines or more...'} btnStyle={{ borderColor: '#B1B1B1' }} />
        </View>
        </View>

    </ScrollView>
   
  )
}

export default SearchMedicine