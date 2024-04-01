import { View, Text, Image, ScrollView } from 'react-native'

export default function TopArtists() {
  return(

    <View className='flex flex-col self-center px-4 bg-white-50 '>
      <View className='bg-white w-full'>
        <View className='w-1/2 bg-blue-50 p-3 my-5 ml-1 rounded-lg'>
          <Text className='text-xl'>Top Artists</Text>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''> 
          
          <View className='bg-blue-500 flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-40 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 2.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-2xl'>Rolipso</Text>
            </View>  
          </View>

          <View className='bg-blue-500 flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-40 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 3.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-2xl'>Quintino</Text>
            </View>  
          </View>

          <View className='bg-blue-500 flex flex-col justify-center '>
            <View className='bg-white'>
              <Image className='w-40 h-44 m-2' resizeMode='cover' source={require ('../assets/images/artist 1.jpg')} />
            </View>
            
            <View className='bg-white justify-start items-start p-2'>
              <Text className='text-2xl'>Dee-1</Text>
            </View>  
          </View>
        </ScrollView>
      </View>
    </View>
  )
}