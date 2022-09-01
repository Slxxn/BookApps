import { View, Text} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editLogin, editNombre } from '../../../redux/action'
import { styles } from '../themes/styles'
import { Button } from '@rneui/themed'
import { colors } from '../themes/colors'

const Connexion = () => {
  
  const dispatch = useDispatch();
  const { nombre } = useSelector(state => state)

  const pressConnexion = () => { 
    dispatch(editLogin(true))
    console.log("connexion")
  }

  const nombrePlus = () =>{
    dispatch(editNombre(nombre+1))
  }

  return (
    <View>
      <Button onPress={pressConnexion} title='Connexion' containerStyle={styles.boutton} color={colors.vert}/>
      <Text style={styles.page}>----------- Vous êtes déconnecté -----------</Text>
      <Text style={styles.compteurText}>Argent sur mon compte : <Text style={styles.compteurNombre}>{nombre}</Text> €</Text>  
      <Button onPress={nombrePlus} title="Cliquez pour + d'argent" containerStyle={styles.bouttonPlus}/>
    </View>
  )
}

export default Connexion