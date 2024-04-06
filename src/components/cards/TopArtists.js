import { View, Text, Image, ScrollView } from 'react-native'
import TitleCard from './TitleCard'

export default function TopArtists() {
  return(

    <View className='flex flex-col bg-white self-center px-2 my-3'>
      <View className='bg-white w-full'>

        <TitleCard title={'Top Artists'} />
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-3'> 
          
          <View className='flex flex-col justify-center '>
            <View className='overflow-hidden rounded-xl'>
              <Image className='w-40 h-40' resizeMode='cover' source={require ('../../assets/images/artist 2.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Rolipso</Text>
            </View>  
          </View>

          <View className='flex flex-col justify-center '>
            <View className='bg-white overflow-hidden rounded-xl'>
              <Image className='w-40 h-40' resizeMode='cover' source={require ('../../assets/images/art 1.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Quintino</Text>
            </View>  
          </View>

          <View className='bg-white flex flex-col justify-center '>
            <View className='overflow-hidden rounded-xl'>
              <Image className='w-40 h-40' resizeMode='cover' source={require ('../../assets/images/release 3.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Dee-1</Text>
            </View>  
          </View>

          <View className='bg-white flex flex-col justify-center '>
            <View className='overflow-hidden rounded-xl'>
              <Image className='w-40 h-40' resizeMode='cover' source={require ('../../assets/images/art 3.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-base'>Dee-1</Text>
            </View>  
          </View>

          <View className='bg-white flex flex-col justify-center '>
            <View className='overflow-hidden rounded-xl'>
              <Image className='w-40 h-40' resizeMode='cover' source={require ('../../assets/images/art 5.jpg')} />
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