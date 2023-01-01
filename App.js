import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/home';
import MusicDetails from './screens/musicdetails';
import Search from './screens/searchmusics';
import Filter from './screens/filter';
import LoginScreen from './screens/login';
import Register from './screens/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#A91079' },
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Ứng dụng nghe nhạc' }} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Danh sách bài hát',}} />
        <Stack.Screen name="MusicDetails" component={MusicDetails} options={{ title: 'Thông tin chi tiết' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Tìm kiếm' }} />
        <Stack.Screen name="Filter" component={Filter} options={{ title: 'Phân loại' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <Text style={styles.titletext}>MusicApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    display: 'flex',
    backgroundColor: '#15133C',
    height: 50,
    width: '100%',
    marginBottom: 24,
    justifyContent: 'center',
    paddingLeft: 12
  },
  titletext: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  }
});
registerRootComponent(App);