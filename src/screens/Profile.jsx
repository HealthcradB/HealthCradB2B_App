import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import Back from '../components/GoBack/Back'

const Profile = () => {
  const navigation = useNavigation()

  const handelEditProfile = () => {
    navigation.navigate('EditProfile')

  }


  const updatePharmacy = ()=>{
    navigation.navigate('UpdatePharmacy')
  }


  const handleHelp = ()=>{
    navigation.navigate('Help&Support')
  }
  return (
    <ScrollView >
      <View style={{ width: responsiveWidth(100), height: 71, backgroundColor: '#13C7EB' , justifyContent:"center"}}>
        <View style={{flexDirection:'row', alignItems:'center' , marginLeft:responsiveWidth(4)}}>
        <Back/>
        <Text style={{ fontSize: 18, fontWeight: 500, lineHeight: 27, color: 'white', paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>{'My Profile'}</Text>

        </View>
        
      </View>


      <View style={{
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(-1)
      }}>

        {/* edit profile */}

        <View style={{
          width: responsiveWidth(90),
          height: 85,
          borderRadius: 8,
          borderWidth: 1,
          marginTop: responsiveHeight(6),
          borderColor: '#D9D9D9',
          justifyContent: 'space-around',
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center'

        }}>
          <View>

            <Image source={require('../images/shop.png')} />

          </View>

          <View>
            <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: 'black' }}>{'Hello,'}</Text>
            <Text style={{ fontSize: 17, fontWeight: 500, lineHeight: 25.5, color: '#13C7EB' }}>{'Bansi Medical Store'}</Text>

          </View>

          <TouchableOpacity onPress={handelEditProfile} style={{ marginLeft: responsiveWidth(2) }}>
            <Image source={require('../images/edit.png')} />
          </TouchableOpacity>

        </View>


        {/* add address */}

        <TouchableOpacity style={{
          width: responsiveWidth(90),
          height: 61,
          borderRadius: 8,
          borderWidth: 1,
          marginTop: responsiveHeight(4),
          borderColor: '#D9D9D9',
          justifyContent: 'center',
          padding: 8,
          alignItems: 'center'

        }}>

          <Text style={{ fontSize: 18, fontWeight: 500, lineHeight: 27, color: '#13C7EB' }}>{'+ Address'}</Text>
        </TouchableOpacity>


        {/* more features buttons */}

        <View style={{ marginTop: responsiveHeight(4), gap: responsiveHeight(3) }}>

          {/* button p-1 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: responsiveWidth(4) }}>


            {/* my order */}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#C0DFFC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/order.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#005EB5' }}>{'My Orders'}</Text>

            </TouchableOpacity>


            {/* help and support */}

            <TouchableOpacity onPress={handleHelp} style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#B9FFF2', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/help.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#04BC9B' }}>{'Help &\nSupport'}</Text>

            </TouchableOpacity>



          </View>


          {/* button part-2 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: responsiveWidth(4) }}>


            {/* Invite to App */}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#BCFFCE', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/invite.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#08C13B' }}>{'Invite to\nApp'}</Text>

            </TouchableOpacity>


            {/* Logout */}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#E9DDFD', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/logout.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#A168FF' }}>{'Logout'}</Text>

            </TouchableOpacity>



          </View>

          {/* button p-3 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: responsiveWidth(4) }}>


            {/* Terms &
Conditions*/}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#FFE8BA', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/t&c.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#F5A508' }}>{'Terms &\nConditions'}</Text>

            </TouchableOpacity>


            {/* Privacy
Policy */}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#BCF3FA', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/privacy.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#48C0E6' }}>{'Privacy\nPolicy'}</Text>

            </TouchableOpacity>



          </View>


          {/* button p-4 */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: responsiveWidth(4) }}>


            {/* update pharmacy details*/}

            <TouchableOpacity onPress={updatePharmacy} style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#FEFFC6', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/pharmacy.png')} style={{ width: responsiveWidth(9), height: responsiveWidth(7) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 22, color: '#B7C611' }}>{'Update\nPharmacy\nDetails'}</Text>

            </TouchableOpacity>


            {/* Privacy
Policy */}

            <TouchableOpacity style={{ width: responsiveWidth(42), height: 73, borderRadius: 15, backgroundColor: '#BCF3FA', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: responsiveHeight(2), padding: 5 }}>
              <Image source={require('../images/privacy.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />

              <Text style={{ fontWeight: 500, fontSize: 17, lineHeight: 25.5, color: '#48C0E6' }}>{'Whislist'}</Text>

            </TouchableOpacity>



          </View>







        </View>


        {/* legacy of healthcrad */}

        <View style={{alignItems:'center', marginTop:responsiveHeight(4)}}>

          <Text style={{fontWeight:600 , fontSize:16 , lineHeight:24 , color:'#7C7979'}}>{'HealthCRAD'}</Text>
          <Text style={{fontWeight:400 , fontSize:12 , lineHeight:18 , color:'#B1B1B1'}}>{'By Bhavah Healthcare Pvt. Ltd.'}</Text>
        </View>




      </View>

    </ScrollView>
  )
}

export default Profile