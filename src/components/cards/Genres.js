import { Text, View, ScrollView, Image } from 'react-native'

export default function Genres() {
  return(
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      
      <View className='bg-white flex flex-col justify-center items-center ml-3 mb-3'>
        <View className='bg-blue-400'>
          <Image className='w-40 h-40 m-1' resizeMode='cover' source={require ('../../assets/images/art 1.jpg')} />
        </View>

        <View className='w-full bg-blue-50 p-2 justify-center items-start space-y-2'>
          <View className='bg-blue-50 flex flex-col '>
            <Text className='text-xl fixed'>Hip Hop Hits</Text>
          </View>
        
          <View className='bg-blue-50'>
            <Text className='text-sm'>4 hours</Text>
          </View>
        </View>
      </View>

      <View className='bg-white flex flex-col justify-center items-center ml-3 mb-3'>
        <View className='bg-blue-400'>
          <Image className='w-40 h-40 m-1' resizeMode='cover' source={require ('../../assets/images/art 2.jpg')} />
        </View>

        <View className='w-full bg-blue-50 p-2 justify-center items-start space-y-2'>
          <View className='bg-blue-50 flex flex-col '>
            <Text className='text-xl fixed'>Fresh Rap</Text>
          </View>
        
          <View className='bg-blue-50'>
            <Text className='text-sm'>2 hours</Text>
          </View>
        </View>
      </View>

      <View className='bg-white flex flex-col justify-center items-center ml-3 mb-3'>
        <View className='bg-blue-400'>
          <Image className='w-40 h-40 m-1' resizeMode='cover' source={require ('../../assets/images/art 3.jpg')} />
        </View>

        <View className='w-full bg-blue-50 p-2 justify-center items-start space-y-2'>
          <View className='bg-blue-50 flex flex-col '>
            <Text className='text-xl fixed'>Fresh Pop</Text>
          </View>
        
          <View className='bg-blue-50'>
            <Text className='text-sm'>3 hours</Text>
          </View>
        </View>
      </View>

      <View className='bg-white flex flex-col justify-center items-center ml-3 mb-3'>
        <View className='bg-blue-400'>
          <Image className='w-40 h-40 m-1' resizeMode='cover' source={require ('../../assets/images/art 4.jpg')} />
        </View>

        <View className='w-full bg-blue-50 p-2 justify-center items-start space-y-2'>
          <View className='bg-blue-50 flex flex-col '>
            <Text className='text-xl fixed'>Deep House</Text>
          </View>
        
          <View className='bg-blue-50'>
            <Text className='text-sm'>4 hours</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

