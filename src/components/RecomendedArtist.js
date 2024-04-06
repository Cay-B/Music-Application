import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import TitleCard from './TitleCard'

export default function RecomendedArtist() {
  return(
    <View className='bg-white px-2'>
      
      <TitleCard title={'Recomended Artist'}/>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-5 px-2'>  

        <View className='bg-white'>

          <TouchableOpacity activeOpacity={0.7}>
            <View className='rounded-2xl w-40 h-40 bg-blue-200 overflow-hidden shadow-xl'>
              <Image source={require('../assets/images/artist 2.jpg')} className='w-40 h-40' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className='bg-white py-4'>
              <Text className='text-base'>Quintino</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View className='bg-white'>

          <TouchableOpacity activeOpacity={0.7}>
            <View className='rounded-2xl w-40 h-40 bg-blue-200 overflow-hidden shadow-xl'>
              <Image source={require('../assets/images/artist 1.jpg')} className='w-40 h-40' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className='bg-white py-4'>
              <Text className='text-base'>Lost</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View className='bg-white'>

          <TouchableOpacity activeOpacity={0.7}>
            <View className='rounded-2xl w-40 h-40 bg-blue-200 overflow-hidden shadow-xl'>
              <Image source={require('../assets/images/artist 2.jpg')} className='w-40 h-40' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className='bg-white py-4'>
              <Text className='text-base'>Tony</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View className='bg-white'>

          <TouchableOpacity activeOpacity={0.7}>
            <View className='rounded-2xl w-40 h-40 bg-blue-200 overflow-hidden shadow-xl'>
              <Image source={require('../assets/images/artist 2.jpg')} className='w-40 h-40' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className='bg-white py-4'>
              <Text className='text-base'>Tony</Text>
            </View>
          </TouchableOpacity>

        </View>
         
      </ScrollView> 
    </View>  
  )
}
      
