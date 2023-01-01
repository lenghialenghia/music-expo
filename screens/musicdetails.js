import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
// import { FlatList } from 'react-native-web';
import musicdata from '../data/musicdata.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Audio } from 'expo-av';

export default function MusicDetails({ route, navigation }) {
    const data = route.params;
    var playMuic = false;

    const pressHandler = (id) => {
        console.log(id);
    }
    console.log(data['Music_ID'].title);
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      if (data['Music_ID'].title == "Nước ngoài") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/nuocngoai.mp3'));
        setSound(sound); await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Nơi ấy con tìm về") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/noiaycontimve.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Điều anh biết") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/dieuanhbiet.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "1 2 3 4") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/1234.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Tìm lại bầu trời") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/timlaibautroi.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Giật mình trong đêm") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/giatminhtrongdem.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Nơi này có anh") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/noinaycoanh.mp3'));
        setSound(sound);await sound.playAsync();
      }
      else if (data['Music_ID'].title == "Em của ngày hôm qua") {
        const { sound } = await Audio.Sound.createAsync( require('../assets/emcuangayhomqua.mp3'));
        setSound(sound);await sound.playAsync();
      }
    }

  

    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image source={require("../assets/logo2.jpg")} style={styles.imgstyle} />
                <Button title="Play"  onPress={playSound}/>
               
            </View>
            <View style={styles.detail}>
            <Text style={styles.texttitle}>{data['Music_ID'].title}</Text>
                <Text style={{fontStyle: 'italic', fontSize: 12, color: 'grey' }}>{data['Music_ID'].edition}</Text>
                <Text style={styles.textauthor}>Ca sĩ: {data['Music_ID'].author}</Text>
                
            </View>
            <View>
            <Text style={styles.textauthor}>{data['Music_ID'].desctiption}</Text>
            </View>
        </SafeAreaView>
    );
}
const sizeW = Dimensions.get('window').width / 2.5;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '200%',

    },
    detail:{
        backgroundColor:'#F2F2F2',
        width:'100%',
        padding:24,
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        // padding: 12,
        // marginBottom: 24,
        width: '100%',
        // shadowColor:'black',
        overflow: 'hidden',
        elevation: 5

    },
    texttitle: {
        fontSize: 30,
        fontWeight: '600',
    },
    textauthor: {
        fontSize: 18,
        color: 'grey'
    },
    imgstyle: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',

    }
});
