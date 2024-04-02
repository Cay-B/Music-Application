import { View, Text, Image, ScrollView } from 'react-native'

export default function NewReleases() {
  return (
    <View className='flex flex-col self-center py-4 px-4 bg-white '>

      <View className='bg-white space-y-3 pt-3 justify-start items-start w-full'>

        <View className='w-1/2 bg-blue-100 p-2 my-3 ml-2 rounded-lg'>
          <Text className='text-xl'>New Releases</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white'>
              <Image className='w-40 h-36 m-2' resizeMode='cover' source={require('../assets/images/release 1.jpg')} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-xl text-center'>We Don't trust </Text>
              </View>
            </View>
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white'>
              <Image className='w-40 h-36 m-2' resizeMode='cover' source={require('../assets/images/release 2.jpg')} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-xl text-center'>Don't Hate You </Text>
              </View>
            </View>
          </View>

          <View className='bg-white flex flex-col justify-center space-y-2'>
            <View className='bg-white'>
              <Image className='w-40 h-36 m-2' resizeMode='cover' source={require('../assets/images/release 3.jpg')} />
            </View>
            <View className='bg-white w-11/12 px-2'>
              <View className=''>
                <Text className='text-xl text-center'>Devotion </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>

  )
}