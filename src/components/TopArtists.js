import { View, Text, Image, ScrollView } from 'react-native'
import TitleCard from './TitleCard'

export default function TopArtists() {
  return(

    <View className='flex flex-col bg-white self-center px-2 my-3'>
      <View className='bg-white w-full'>

        <TitleCard title={'Top Artists'} />
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''> 
          
          <View className='bg-blue-500 flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-44 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 2.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Rolipso</Text>
            </View>  
          </View>

          <View className='bg-blue-500 flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-44 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 3.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Quintino</Text>
            </View>  
          </View>

          <View className='bg-white flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-44 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 1.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Dee-1</Text>
            </View>  
          </View>
        </ScrollView>
      </View>
    </View>
  )
}