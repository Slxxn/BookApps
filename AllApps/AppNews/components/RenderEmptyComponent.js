import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderEmptyComponent = ({waiting}) => {
  return (
    <View style={styles.content}>

        {   
            // if waiting 
            waiting?

            <ActivityIndicator/>

            :<Text>Pas de News</Text>
        }
      
    </View>
  )
}

export default RenderEmptyComponent

const styles = StyleSheet.create({

    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})