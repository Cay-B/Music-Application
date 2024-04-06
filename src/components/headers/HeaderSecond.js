import {Text, View } from 'react-native' 

export default function HeaderSecond({title, secondTitle}) {
  return(
    <View className='flex justify-center bg-white h-24'>
      <View className='flex flex-row justify-start rounded-md space-x-5 py-1 pr-1 items-center w-11/12 bg-white ml-5'>
        <View className="rounded-md bg-whites p-2">
          <Text className='text-xl font-semibold'>{title}</Text>
        </View>
        <View className="rounded-md bg-whites p-2">
          <Text className='text-xl font-semibold'>{secondTitle}</Text>
        </View>
      </View>
    </View>
  )
}