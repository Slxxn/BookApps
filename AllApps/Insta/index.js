import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import styles from './themes/styles'


const Insta = () => {

  const navigation = useNavigation();
  const {login} = useSelector(state => state)

  return (
    <View>
      
      <Button title='GO BACK' onPress={() => navigation.goBack()}/>
      <Text>Insta</Text>

      {/* IF login = true alors -> 
       ( condition 1)
      sinon(condition 2)  */}

      {login?
        <View>
        <Text>Esta conectado</Text>
        <View style={styles.StatutsLed} />
       </View> 
       :
      <Text>NO CONNECTION</Text>}
     
      
    </View>
  )
}

export default Insta