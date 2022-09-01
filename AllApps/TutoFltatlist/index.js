import { View, Text,FlatList, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Tuto = () => {

    const navigation = useNavigation();

    const [getNombre, setNombre] = useState([1,2,3,4,5,6,7,8,9,10])

    //fontion qui ajoute les items
    const addNombre = () => {

       const tempNombre = [...getNombre, getNombre.length+1]
       setNombre(tempNombre)
    }


  return (

        

        <FlatList
            ListHeaderComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    color={'green'}
                    title='Exit'
                />

            }
            data={getNombre}
            renderItem={ ({item}) => <Text style={{fontSize:20, alignSelf:'center', borderBottomWidth:2, paddingHorizontal:50,}}>item  {item}</Text> }
            keyExtractor={item => item}
            onEndReached={addNombre}
            onEndReachedThreshold={0.2}
        />
  )
}

export default Tuto