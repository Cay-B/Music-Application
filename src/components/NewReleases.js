import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import TitleCard from './TitleCard'
import PlayButton from './PlayButton';

export default function NewReleases() {
  const handlePlayButtonPress = () => {
    console.log('Play button pressed');
  };

  return (
    <View className='flex flex-col self-center px-2 bg-white my-3'>
      
      <TitleCard title={'New Releases'}/>
        
      <View className='bg-white space-y-3 pt-3 justify-start items-start w-full'>   

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-4'>

          {/*  */}

          <View className='bg-white flex flex-col justify-center space-y-2'>
            
            <TouchableOpacity activeOpacity={0.7}>
              <View className='bg-red-500 rounded-xl overflow-hidden'>
                <Image className='w-36 h-36' resizeMode='cover' source={require('../assets/images/release 1.jpg')} />
                <PlayButton onPress={handlePlayButtonPress} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.3}>
              <View className='bg-white mx-2'>
                <Text className='text-base text-center'>We Don't trust </Text>
              </View>
            </TouchableOpacity> 
            
          </View>

          {/*  */}

          <View className='bg-white flex flex-col justify-center space-y-2'>
            
            <TouchableOpacity activeOpacity={0.7}>
              <View className='bg-red-500 rounded-xl overflow-hidden'>
                <Image className='w-36 h-36' resizeMode='cover' source={require('../assets/images/release 2.jpg')} />
                <PlayButton onPress={handlePlayButtonPress} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.3}>
              <View className='bg-white mx-2'>
                <Text className='text-base text-center'>Don't Hate You </Text>
              </View>
            </TouchableOpacity> 
            
          </View>

          {/*  */}

          <View className='bg-white flex flex-col justify-center space-y-2'>
            
            <TouchableOpacity activeOpacity={0.7}>
              <View className='bg-red-500 rounded-xl overflow-hidden'>
                <Image className='w-36 h-36' resizeMode='cover' source={require('../assets/images/release 3.jpg')} />
                <PlayButton onPress={handlePlayButtonPress} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.3}>
              <View className='bg-white mx-2'>
                <Text className='text-base text-center'>Devotion</Text>
              </View>
            </TouchableOpacity> 
            
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            
            <TouchableOpacity activeOpacity={0.7}>
              <View className='bg-red-500 rounded-xl overflow-hidden'>
                <Image className='w-36 h-36' resizeMode='cover' source={require('../assets/images/release 3.jpg')} />
                <PlayButton onPress={handlePlayButtonPress} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.3}>
              <View className='bg-white mx-2'>
                <Text className='text-base text-center'>Devotion</Text>
              </View>
            </TouchableOpacity> 
            
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            
            <TouchableOpacity activeOpacity={0.7}>
              <View className='bg-red-500 rounded-xl overflow-hidden'>
                <Image className='w-36 h-36' resizeMode='cover' source={require('../assets/images/release 3.jpg')} />
                <PlayButton onPress={handlePlayButtonPress} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.3}>
              <View className='bg-white mx-2'>
                <Text className='text-base text-center'>Devotion</Text>
              </View>
            </TouchableOpacity> 
            
          </View>

         
        </ScrollView>
      </View>
    </View>

  )
}