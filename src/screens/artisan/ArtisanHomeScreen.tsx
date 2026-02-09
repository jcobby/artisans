import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions, Text, View, useWindowDimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
// import MyCarousel from '../../components/carousel'
import Carousel from 'react-native-reanimated-carousel'

export default function ArtisanHomeScreen() {
  const [search, onChangeSearch] = useState('')
  // const width = useWindowDimensions()
  const width = Dimensions.get('window').width
  const data = [1, 2, 3, 4, 5]

  return (
    <SafeAreaView>
      {/* <View className="flex-1 "> */}
      <View className='flex flex-row items-center justify-between'>
        <Text className='text-2xl font-bold'>Welcome John,</Text>
        <View className='rounded-full bg-blue-300 p-2'>
          <Ionicons name="notification-outline" size={25} color='text-blue-500' />
        </View>
      </View>

      <TextInput
        placeholder='search for kwaft and kwafters around you'
        value={search}
        onChangeText={onChangeSearch}
      />

      <View>
        <Carousel
          loop={true}
          mode='parallax'
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          data={data}
          height={200}
          scrollAnimationDuration={800}
          width={width}
          renderItem={({ item }) =>
            <View
              style={{
                flex: 1,
                backgroundColor: '#1e293b',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
              }}>
              <Text>{item}</Text>
            </View>}
        />

        <Text>Top Kawfters in your field</Text>
        <Carousel
              loop={true}
              data={data}
              height={150}
              mode='parallax'
              scrollAnimationDuration={800}
              width={width}
              renderItem={({ item }) =>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#1e293b',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                    // width: width * 0.9,
                  }}>
                  <Text>{item}</Text>
                </View>} 
            />

        <Text>Categories</Text>
        <Carousel
              loop={true}
              data={data}
              height={100}
              scrollAnimationDuration={800}
              width={width}
              renderItem={({ item }) =>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#1e293b',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                  }}>
                  <Text>{item}</Text>
                </View>} 
            />
      </View>
    </SafeAreaView>
  )
}
