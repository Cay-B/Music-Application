import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from './src/components/headers/Header.js'
import ArtistList from './src/components/cards/ArtistsList.js';
import HeaderSecond from './src/components/headers/HeaderSecond.js';
import Genres from './src/components/cards/Genres.js'
import RecentlyPlayed from './src/components/cards/RecentlyPlayed.js';
import TopArtists from './src/components/cards/TopArtists.js';
import NewReleases from './src/components/cards/NewReleases.js';
import RecomendedArtist from './src/components/cards/RecomendedArtist.js';
import Spinner from './src/components/loaders/Spinner.js';

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

