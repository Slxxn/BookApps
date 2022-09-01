import { View, Text,Button,ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './theme/styles'
import { Image } from '@rneui/themed'

const Details = ({route}) => {

    const {item} = route.params;
    const navigation = useNavigation();

  return (
    <View style={styles.DetailsView}>
      <Button title='GO BACK' onPress={() => navigation.goBack()}/>

      <Text style={styles.DetailsText}>{item.titre} : </Text>

      <View style={styles.DetailsImageView}>
        <Image style={styles.DetailsImage} 
                    source={item.image}
                    resizeMode={'cover'}
                    PlaceholderContent={<ActivityIndicator/>}                  
        />
      </View>

      <Text style={styles.DetailsDescription}>{item.description} : </Text>

    </View>
  )
}

export default Details