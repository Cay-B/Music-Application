import { View, Text, TouchableOpacity } from 'react-native'
import ExploreButton from '../buttons/ExploreButton';

export default function TitleCard({title}) {
  return(
    <View className='bg-white w-fit inline-block flex-row justify-between py-3 px-1 my-5 ml-1 rounded-lg'>
      <Text className='text-xl font-semibold'>{title}</Text>
      <ExploreButton />
    </View>
  )
}