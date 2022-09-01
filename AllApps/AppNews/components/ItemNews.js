import { View, Text, Image, ActivityIndicator, TouchableOpacity  } from 'react-native'
import React from 'react'
import { styles } from '../theme/styles'
import { useNavigation } from '@react-navigation/native'

const ItemNews = ({item}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.ItemNewsView} onPress={() => {navigation.navigate('Details', {item})}}>



        {/*marche pour api */}
         {/* <Image  
            style={styles.ItemNewsImage}
            source={{uri:item.image}}
            resizeMode={'cover'}
            PlaceholderContent={<ActivityIndicator/>} 
        /> */}

          <Image  
            style={styles.ItemNewsImage}
            source={item.image}
            resizeMode={'cover'}
            PlaceholderContent={<ActivityIndicator/>}
            />

        <View style={styles.ItemNewsTextView}>
            <Text style={styles.ItemNewsTitre}>{item.titre}</Text>
        </View>
        
    </TouchableOpacity>
  )
}

export default ItemNews