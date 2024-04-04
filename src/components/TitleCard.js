import { View, Text } from 'react-native'

export default function TitleCard({title}) {
  return(
    <View className='bg-white w-fit inline-block p-3 my-5 ml-1 rounded-lg'>
      <Text className='text-xl font-semibold'>{title}</Text>
    </View>
  )
}