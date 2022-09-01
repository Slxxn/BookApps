import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './AllApps/First';
import Insta from './AllApps/Insta';
import News from './AllApps/AppNews';
import Tuto from './AllApps/TutoFltatlist';
import Details from './AllApps/AppNews/Details';
import store from './redux/store'
import { Provider } from 'react-redux';
import Ecommerce from './AllApps/eCommerce';

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='First' screenOptions={{headerShown:false}}>
          <Stack.Screen name="First" component={First}/>
          <Stack.Screen name="AppInsta" component={Insta}/>

          <Stack.Screen name="AppNews" component={News}/>
          <Stack.Screen name="AppNewsDetails" component={Details}/>

          <Stack.Screen name="AppTuto" component={Tuto}/>

          <Stack.Screen name="AppEcommerce" component={Ecommerce}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})