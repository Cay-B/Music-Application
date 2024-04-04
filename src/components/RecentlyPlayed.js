import { Text, View, Image } from 'react-native'
import TitleCard from './TitleCard'

export default function RecentlyPlayed() {
  return(
    
    <View className='flex-1 bg-white h-64 space-y-3 flex justify-center items-center'>
      
      <View className='w-full px-2'>
        <TitleCard title={'Recently Played'} />
      </View>

      <View className='flex flex-row justify-center space-x-3 py-1 '>
        
        <View className='bg-blue-100 w-1/2 h-36 rounded-lg shadow-lg shadow-slate-500'>
          <Image resizeMode='cover' className='w-full h-36' source={require('../assets/images/art 5.jpg')} />
        </View>

        <View className='flex justify-center bg-blue-50 w-2/5 h-36 px-2 rounded-lg shadow-lg shadow-slate-500'>
          <Text>Man on the moon</Text>
          <Text>Milky Way</Text>
          <Text>Big Picture</Text>
        </View>
      
      </View>

      </View>
  )
}