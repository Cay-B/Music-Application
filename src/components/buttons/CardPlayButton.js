import { View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function PlayButton({onPress}) {
  const handlePress = () => {
    onPress();
  };
  return(
    <View>
      <TouchableOpacity activeOpacity={0.3} className=' absolute bottom-2 right-3 translate-x-1/2 translate-y-1/2' onPress={handlePress}>
        <AntDesign name="playcircleo" size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}