import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const News = () => {

    const navigation = useNavigation();
    
  return (
    <View>
      
      <Button title='GO BACK' onPress={() => navigation.goBack()}/>
      <Text>News</Text>
      
    </View>
  )
}

export default News