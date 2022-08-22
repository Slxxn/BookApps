import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Insta = () => {

  const navigation = useNavigation();

  return (
    <View>
      
      <Button title='GO BACK' onPress={() => navigation.goBack()}/>
      <Text>Insta</Text>
      
    </View>
  )
}

export default Insta