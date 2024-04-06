import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({title}) {
  return(
    <View className='flex flex-row justify-between items-center bg-white h-36'>
        <View className='bg-white p-1 rounded-md ml-5'>
          <Text className='text-4xl'>{title}</Text>
        </View>
        
        <View className='bg-white p-2 flex flex-row justify-end space-x-1 w-1/2 rounded-md mr-3'>
          <View className='bg-white justify-center items-center w-1/3'>
            <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>

          </View>
          
          <View className='bg-white justify-center items-center w-1/3'>
            <TouchableOpacity>
            <Image source={require('../../assets/images/artist 2.jpg')} className='wsd w-12 h-12 rounded-full' />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

