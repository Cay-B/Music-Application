import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function TitleCard({title}) {
  return(
    <View className='bg-white w-fit inline-block flex-row justify-between p-3 my-5 ml-1 rounded-lg'>
      <Text className='text-xl font-semibold'>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="arrow-forward-circle" size={23} color="black" />
      </TouchableOpacity>
    </View>
  )
}