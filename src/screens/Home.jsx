import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomSearch from '../components/Others/CustomSearch';
import CustomOrder from '../components/Others/CustomOrder';

const { width: viewportWidth } = Dimensions.get('window');

const images = [
  require('../images/banner_1.png'),
  require('../images/banner_1.png'),
  require('../images/banner_1.png'),
  require('../images/banner_1.png'),
];

const Home = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [token ,setToken]= useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = activeIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * (viewportWidth - responsiveWidth(9)), animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / (viewportWidth - responsiveWidth(9)));
    setActiveIndex(index);
  };

  return (
    <ScrollView style={{ paddingLeft: responsiveWidth(4.5), paddingRight: responsiveWidth(4.5) }}>
    

      <View style={{ marginTop: responsiveHeight(2.5) }}>
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

        {/* Image Carousel */}
        <View style={{ marginTop: responsiveHeight(2) }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.carouselContainer}
          >
            {images.map((image, index) => (
              <View key={index} style={styles.carouselItem}>
                <Image
                  source={image}
                  style={styles.carouselImage}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  { opacity: activeIndex === index ? 1 : 0.5 },
                ]}
              />
            ))}
          </View>
        </View>

        {/* free delivery convience fee */}

        <View style={{ marginTop: responsiveHeight(3.4) }}>
          <View style={{
            height: 66, width: responsiveWidth(90),
            borderRadius: 8,
            borderWidth: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            gap: 12

          }}>
            <View>
              <Image source={require('../images/discount.png')} />
            </View>
            <View >
              <Text style={{ fontSize: 16, fontWeight: 600, lineHeight: 24, color: '#1E1E1E' }}>{'Free Delivery & Connivence Charge'}</Text>
              <Text style={{ fontSize: 13, fontWeight: 400, lineHeight: 19.5, color: '#7C7979' }}>{'on every order above Rs. 10,000'}</Text>

            </View>

          </View>
        </View>

        {/* order on call and whats up */}

        <View style={{ marginTop: responsiveHeight(3.5), flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomOrder txt1={' Order by\nWhatsapp'} txt2={'Order'} style2={{ borderRadius: 8 }} />
          <CustomOrder txt1={' Order by \n     call'} txt2={'Order'} Style1={{ backgroundColor: '#097EEB' }} txtStyle={{ color: '#097EEB' }} source={require('../images/call.png')} style2={{ borderRadius: 8 }} />
        </View>

        {/* frequently purched item */}
        <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 500, fontSize: 18, lineHeight: 27, color: 'black' }}>{'Frequently Purchased Items'}</Text>

          <TouchableOpacity>
            <Text style={{ fontWeight: 500, fontSize: 20, lineHeight: 30, color: '#13C7EB' }}>{'See All >'}</Text>
          </TouchableOpacity>

          {/* medicines comming soon..... */}

          



        </View>


        {/* Exexlusive */}
        <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 500, fontSize: 18, lineHeight: 27, color: 'black' }}>{'Exclusive '}</Text>

          <TouchableOpacity>
            <Text style={{ fontWeight: 500, fontSize: 20, lineHeight: 30, color: '#13C7EB' }}>{'See All >'}</Text>
          </TouchableOpacity>


          {/*  */}

          </View>






      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',

  },
  carouselItem: {
    width: viewportWidth - responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(4.5),
  },
  carouselImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(1.4),
  },
  indicator: {
    height: 4,
    width: 20,
    backgroundColor: '#10CAF2',
    marginHorizontal: 3,
    borderRadius: 2,
  },

});

export default Home;
