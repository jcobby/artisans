import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = ['Slide 1', 'Slide 2', 'Slide 3'];

export default function MyCarousel() {
  return (
    <Carousel
      width={width}
      height={200}
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: '#1e293b',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>
            {item}
          </Text>
        </View>
      )}
    />
  );
}
