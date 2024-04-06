import { Text, View, Image, ScrollView } from "react-native";

export default function ArtistList() {
  
  return(
    <View className="flex justify-center items-center bg-white h-60">

    {/* Individual Artists */}
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View className='flex-1 bg-blue-100 w-4/5 mr-3 rounded-xl'>
      <Image className='flex-1 w-60 h-20' resizeMode='contain' source={require('../../assets/images/artist 3.jpg')} />
    </View>
    <View className='flex-1 bg-blue-100 w-4/5 mr-3'>
      <Image className='flex-1 w-60 h-20' resizeMode='contain' source={require('../../assets/images/artist 2.jpg')} />
    </View>
    <View className='flex-1 bg-blue-100 w-4/5 mr-3'>
      <Image className='flex-1 w-60 h-20' resizeMode='contain' source={require('../../assets/images/artist 1.jpg')} />
    </View>
    
    </ScrollView>

</View>
  )
}