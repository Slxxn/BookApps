import { View, Text} from 'react-native'
import React from 'react'
import { styles } from '../themes/styles'
import { useDispatch } from 'react-redux'
import { editLogin } from '../../../redux/action'
import { Button } from '@rneui/themed'
import { colors } from '../themes/colors'


const Private  = () => {

  const pressConnexion = () => { 
    dispatch(editLogin(false))
    console.log("deconnexion")
  }


  const dispatch = useDispatch();


  return (
    <View>
      <Button onPress={pressConnexion} title='Déconnexion' containerStyle={styles.boutton} color={colors.rouge} />
      <Text style={styles.page}>-------------- Vous êtes connecté --------------</Text>

    </View>
  )
}

export default Private