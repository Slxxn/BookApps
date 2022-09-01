import { View, Text } from 'react-native'
import React from 'react'
import Private from './Private/index'
import Connexion from './Public/Connexion'
import { useSelector } from 'react-redux'
import { styles } from './themes/styles'

const Index = () => {

    const { login } = useSelector(state=>state)

  return (
    <View>
      <Text style={styles.title}>E-commerce</Text>
      {
        !login? //IF
            <Connexion/>
        : //ELSE
            <Private/>
      }
      
      
    </View>
  )
}

export default Index