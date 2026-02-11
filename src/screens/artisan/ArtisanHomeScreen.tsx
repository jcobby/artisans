import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

export default function ArtisanHomeScreen() {
  const [search, onChangeSearch] = useState('');
  const { width } = Dimensions.get('window');

  const data = [1, 2, 3, 4, 5];

  // Hardcoded widths for carousels
  const SCREEN_PADDING = 16;

  // 1st carousel: 1 card visible
  const CAROUSEL1_WIDTH = width - SCREEN_PADDING * 2;
  const ITEM1_WIDTH = CAROUSEL1_WIDTH;

  // 2nd carousel: 2 cards visible
  const GAP2 = 16;
  const CAROUSEL2_WIDTH = width - SCREEN_PADDING * 2;
  const ITEM2_WIDTH = (CAROUSEL2_WIDTH - GAP2) / 2;

  // 3rd carousel: 3 cards visible
  const GAP3 = 12;
  const CAROUSEL3_WIDTH = width - SCREEN_PADDING * 2;
  const ITEM3_WIDTH = (CAROUSEL3_WIDTH - GAP3 * 2) / 3;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: SCREEN_PADDING }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome John,</Text>
          <View style={{ borderRadius: 999, backgroundColor: '#bfdbfe', padding: 8 }}>
            <Ionicons name="notifications-off" size={24} color="black" />
          </View>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search for kwaft and kwafters around you"
          value={search}
          onChangeText={onChangeSearch}
          style={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#d1d5db',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginBottom: 24,
            color: '#111827',
          }}
        />

        {/* First carousel: 1 card */}
        <Carousel
          loop
          width={CAROUSEL1_WIDTH}
          height={200}
          data={data}
          scrollAnimationDuration={800}
          renderItem={({ item }) => (
            <View
              style={{
                width: ITEM1_WIDTH,
                height: 200,
                backgroundColor: '#1e293b',
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item}</Text>
            </View>
          )}
        />

        {/* Second carousel: 2 cards */}
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginVertical: 16
          }}
        > Top Kawfters in your field</Text>
        <Carousel
          loop
          pagingEnabled
          snapEnabled
          width={CAROUSEL2_WIDTH}
          height={150}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: ITEM2_WIDTH,
                height: 150,
                marginRight: GAP2,
                backgroundColor: '#1e293b',
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item}</Text>
            </View>
          )}
        />

        {/* Third carousel: 3 cards */}
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 16 }}>Categories</Text>
        <Carousel
          loop
          width={CAROUSEL3_WIDTH}
          height={100}
          data={data}
          scrollAnimationDuration={800}
          renderItem={({ item }) => (
            <View
              style={{
                width: ITEM3_WIDTH,
                height: 100,
                marginRight: GAP3,
                backgroundColor: '#1e293b',
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
