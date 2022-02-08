import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Slider,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import TrackPlayer, { useProgress } from 'react-native-track-player';
const track =
{
  id: '1',
  url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
  title: 'Keys of moon',
  artist: 'The Epic Hero',
  artwork: 'https://picsum.photos/id/1003/200/300',
  album: '',
  duration: 149,
}




const App = () => {

  const progress = useProgress();

  const playMusic = () => {
    TrackPlayer.add(track);
    TrackPlayer.play();
  }

  const pauseMusic = () => {
    TrackPlayer.pause();
  }

  const stopMusic = () => {
    TrackPlayer.stop();
  }

  const moveToPosition = () => {
    TrackPlayer.seekTo(70);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>

      <TouchableOpacity
        onPress={playMusic}
        style={{
          padding: 20,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text>PLAY</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={pauseMusic}
        style={{
          padding: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}>
        <Text>PAUSE</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={stopMusic}
        style={{
          padding: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}>
        <Text>STOP</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={moveToPosition}
        style={{
          padding: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}>
        <Text>MOVE TO</Text>
      </TouchableOpacity>

      <Text>{JSON.stringify(progress)}</Text>
      

      <Slider 
      minimumValue={0} 
      maximumValue={progress.duration} 
      value={progress.position}
      thumbTintColor={'red'}
      />
    </View>
  );
};


export default App;
