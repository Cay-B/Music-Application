import { View, Text, Image, ScrollView } from 'react-native'

export default function RecomendedArtist() {
  return(
    <View className='flex flex-col self-center mt-5 py-8 px-4 bg-blue-50 '>
<View className='bg-blue-500 w-full'>
    
    <View className='w-11/12 bg-blue-100 p-2 rounded-lg'>
      <Text className='text-xl'>Recommended Artist</Text>
    </View>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''> 
      <View className='bg-blue-50 flex flex-col justify-center space-y-2'>
        <View className='bg-blue-50'>
          <Image className='w-32 h-32 m-2' resizeMode='cover' source={require ('../assets/images/rec art 1.jpg')} />
        </View>
        <View className='bg-blue-50 w-11/12 px-2'>
          <View className=''>
            <Text className='text-xl'>Tedashii </Text>
          </View>
          <View>
            <Text className='text-sm'></Text>
          </View>
        </View>
      </View>
  </ScrollView>
  </View>
  </View>
  )
}
      
