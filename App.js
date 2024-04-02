import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from './src/components/Header.js'
import ArtistList from './src/components/ArtistsList.js';
import HeaderSecond from './src/components/HeaderSecond.js';
import Genres from './src/components/Genres.js'
import RecentlyPlayed from './src/components/RecentlyPlayed.js';
import TopArtists from './src/components/TopArtists.js';
import NewReleases from './src/components/NewReleases.js';

export default function App() {
  return (
    
    <SafeAreaView>
      <ScrollView>  
      <StatusBar style="auto" translucent={true} backgroundColor='white' />
        <View className='flex-1'>
          
          <Header title={'Home'}/>
          <ArtistList />
          <HeaderSecond title='Feed' secondTitle='Social'/> 
          <Genres />
          <RecentlyPlayed />
          <TopArtists />
          <NewReleases />
        </View>

    

      

      
        {/* Recommended Artist  */}
      
        <View className='flex flex-col self-center mt-5 py-8 px-4 bg-blue-50 '>
      <View className='bg-blue-50 w-full'>
          
          <View className='w-11/12 bg-blue-100 p-2 rounded-lg'>
            <Text className='text-xl'>Recommended Artist</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className=''> 
            <View className='bg-blue-50 flex flex-col justify-center space-y-2'>
              <View className='bg-blue-50'>
                <Image className='w-32 h-32 m-2' resizeMode='cover' source={require ('./src/assets/images/rec art 1.jpg')} />
              </View>
              <View className='bg-blue-50 w-11/12 px-2'>
                <View className=''>
                  <Text className='text-xl'>Tedashii </Text>
                </View>
                <View>
                  <Text className='text-sm'></Text>
                </View>
              </View>
            </View>

            <View className='bg-blue-50 flex flex-col justify-center space-y-2'>
              <View className='bg-blue-50'>
                <Image className='w-32 h-32 m-2' resizeMode='cover' source={require ('./src/assets/images/rec art 2.jpg')} />
              </View>
              <View className='bg-blue-50 w-11/12 px-2'>
                <View>
                  <Text className='text-xl'>Future</Text>
                </View>
                <View>
                  <Text className='text-sm'></Text>
                </View>
              </View>
            </View>

            <View className='bg-blue-50 flex flex-col justify-center space-y-2'>
              <View className='bg-blue-50'>
                <Image className='w-32 h-32 m-2' resizeMode='cover' source={require ('./src/assets/images/rec art 3.jpg')} />
              </View>
              <View className='w-11/12 bg-blue-50 px-2'>
                <View>
                  <Text className='text-xl'>Lost Frequen</Text>
                </View>
                <View>
                  <Text className='text-sm'></Text>
                </View>
              </View>
            </View>
        </ScrollView>
        </View>
        </View>
      
    </ScrollView>
  </SafeAreaView>  
  );
}

