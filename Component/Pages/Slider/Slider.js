import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay={true} showsButtons={false}>
        <View style={styles.slide}>
          <Image
            source={require('./photo.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./photo.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./photo.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .4,
    marginTop:0
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Slider;
