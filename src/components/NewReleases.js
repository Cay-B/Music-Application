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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white relative'>
              <TouchableOpacity>
              <Image className='w-40 h-40 m-2' resizeMode='cover' source={require('../assets/images/release 1.jpg')} />
              </TouchableOpacity>

              <PlayButton onPress={handlePlayButtonPress} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-base text-center'>We Don't trust </Text>
              </View>
            </View>
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white'>
              <TouchableOpacity>
                <Image className='w-40 h-40 m-2' resizeMode='cover' source={require('../assets/images/release 2.jpg')} />
              </TouchableOpacity>
              <PlayButton onPress={handlePlayButtonPress} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-base text-center'>Don't Hate You </Text>
              </View>
            </View>
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white'>
              <TouchableOpacity>
              <Image className='w-40 h-40 m-2' resizeMode='cover' source={require('../assets/images/release 3.jpg')} />
              </TouchableOpacity>
              <PlayButton onPress={handlePlayButtonPress} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-base text-center'>Devotion </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>

  )
}