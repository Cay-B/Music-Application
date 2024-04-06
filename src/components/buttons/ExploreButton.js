import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function ExploreButton() {
  return(
    <View>
      <TouchableOpacity>
        <Ionicons name="arrow-forward-circle" size={23} color="gra" />
      </TouchableOpacity>
    </View>
  )
}