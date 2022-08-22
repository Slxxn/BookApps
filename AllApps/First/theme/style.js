import { StyleSheet} from 'react-native'
import { color } from './color'
export const styles = StyleSheet.create({

    content:{
        backgroundColor:color.primary,
        padding:10,
        margin:10,
        borderRadius:5,
    },

    titre:{
        color:color.textPrimary,
        fontSize:24,
        fontWeight:'600',
        alignSelf:'center',
        textTransform:'uppercase'
    }

})