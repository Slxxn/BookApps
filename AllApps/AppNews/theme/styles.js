import { StyleSheet } from 'react-native'
import { colors } from './colors'


export const styles = StyleSheet.create({

    ItemNewsView:{
        alignItems:'center',       
        borderStyle:'solid',
        borderWidth:3,
        borderColor:colors.secondary,  
        margin:6,
        backgroundColor:'grey',
        minHeight:90,
        borderRadius:10,
        flexDirection:'row',     
    },

    ItemNewsImage:{
        height:70,
        width:60,
        margin:6,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:colors.secondary,
        borderRadius:10,
    },

    ItemNewsTextView:{
        margin:5,
        width:'75%'
    },  

    ItemNewsTitre:{
        fontSize:20,
        color:'white',
        marginBottom:5,
    },

    ItemNewsDescription:{
        fontSize:10,
        color:'white',
    },

    NavigationButtonView:{
        height:100,
        flexDirection:'row',
        justifyContent:'space-around' ,
        alignItems:'center',
    },

     NavigationButton:{
        backgroundColor:'white',       
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:5,
        padding:10,
        width:'40%',
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },

    NavigationButtonText:{
        color:'black',
        fontSize:20,
        textAlign:'center',
        
    },

    DetailsView:{
        flex:1,

    },

    DetailsText:{
        height:50,
        fontSize:25,
        color:'black',
        textDecorationLine:'underline',
        margin:10,
    },

    DetailsImageView:{
        flex:1,
        justifyContent:'center',
        margin:5,
    },  

    DetailsImage:{
        width:'100%',
        height:200,
        
    },

    DetailsDescription:{
        flex:2,
        fontSize:15,
        color:'black',
        margin:10,

    
    }

})