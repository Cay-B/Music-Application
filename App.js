import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from './src/components/Header.js'
import ArtistList from './src/components/ArtistsList.js';
import HeaderSecond from './src/components/HeaderSecond.js';
import Genres from './src/components/Genres.js'
import RecentlyPlayed from './src/components/RecentlyPlayed.js';
import TopArtists from './src/components/TopArtists.js';
import NewReleases from './src/components/NewReleases.js';
import RecomendedArtist from './src/components/RecomendedArtist.js';

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
          <RecomendedArtist />
        </View>
    </ScrollView>
  </SafeAreaView>  
  );
}

