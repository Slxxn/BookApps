import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './AllApps/First';
import Insta from './AllApps/Insta';
import News from './AllApps/AppNews';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First' screenOptions={{headerShown:false}}>
        <Stack.Screen name="First" component={First}/>
        <Stack.Screen name="AppInsta" component={Insta}/>
        <Stack.Screen name="AppNews" component={News}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})