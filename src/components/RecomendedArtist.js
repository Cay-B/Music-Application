import { View, Text, Image, ScrollView } from 'react-native'
import TitleCard from './TitleCard'

export default function RecomendedArtist() {
  return(
    <View className='bg-white px-2'>
      
    <TitleCard title={'Recomended Artist'}/>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-5 px-2'>  
      <View className='bg-blue-200'>
        <View>
          <Image source={require('../assets/images/artist 3.jpg')} className='w-44 h-40' />
        </View>

        <View className='bg-white py-4'>
          <Text className='text-base'>Quintino</Text>
        </View>
      </View>

      <View className='bg-blue-200'>
        <View>
          <Image source={require('../assets/images/artist 2.jpg')} className='w-44 h-40' />
        </View>

        <View className='bg-white py-4'>
          <Text className='text-base'>Rolipso</Text>
        </View>
      </View>

      <View className='bg-blue-200'>
        <View>
          <Image source={require('../assets/images/artist 1.jpg')} className='w-44 h-40' />
        </View>

        <View className='bg-white py-4'>
          <Text className='text-base'>Dee-1</Text>
        </View>
      </View> 
    </ScrollView> 
    </View>  
  )
}
      
