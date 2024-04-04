import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PlayButton({onPress}) {
  const handlePress = () => {
    onPress();
  };
  return(
    <View>
      <TouchableOpacity className=' absolute bottom-4 right-4 translate-x-1/2 translate-y-1/2' onPress={handlePress}>
        <AntDesign name="playcircleo" size={35} color="white" />
      </TouchableOpacity>
    </View>
  )
}