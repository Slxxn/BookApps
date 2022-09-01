import { View, Text,FlatList, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import ItemNews from './components/ItemNews'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { apiNews } from './function/api'
import { styles } from './theme/styles'
import RenderEmptyComponent from './components/RenderEmptyComponent'
import { news } from '../../datas/news'

  const NewsScreen = () => {

  const [getNews, setNews] = useState([]) ;
  const [waiting , setWaiting ] = useState(false)

  //gestion de la pagination et initialisation a la page 1
  const [getPage, setPage] = useState(1) ;

  const navigation = useNavigation();

  useEffect(()=>{
    setWaiting(true);
    loadNews();
  },[])

  // chargement loadmore -> plus de contenu chargé 
  const loadNews = async () => {

    //chargement de mon api 
    const articles = await apiNews(getPage);
    setWaiting(true);

    setTimeout( () => {
                        setNews([...getNews,...articles])
                        setWaiting(true);
                      } ,2000) ;
                          
  }
  //Bouton page suivante
  const nextPage = async () =>{
    setPage(getPage+1)
    loadNews()
  }
    //Bouton page precedente
  const previousPage = async () =>{
    setPage(getPage-1)
    loadNews()   
  }

  const NavigationButton = () => {
    return (
      <View style={styles.NavigationButtonView}>
        <TouchableOpacity style={styles.NavigationButton} onPress={previousPage}>
          <Text  style={styles.NavigationButtonText}>Previous Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NavigationButton} onPress={nextPage}>
          <Text style={styles.NavigationButtonText}>Next Page</Text>
        </TouchableOpacity>        
      </View>
    )
  }

  return (
    <View style={{flex:1}}>

        <Button title='GO BACK' onPress={() => navigation.goBack()}/> 
            
        <NavigationButton/> 

        <FlatList
        data={news}
        renderItem={ ({item}) => <ItemNews item={item} /> }
        keyExtractor={(item, index) => 'key'+index}
        ListEmptyComponent={
          <RenderEmptyComponent waiting={waiting}/>
        }
        ListFooterComponent={
          (waiting && getNews.length > 0) && <ActivityIndicator/>
        }
        />

    </View>
  )
}

export default NewsScreen
