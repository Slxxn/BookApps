import axios from "axios";

// URL de mon API 
/* const urlApi = 'https://newsapi.org/v2/everything'; */
// Clé de mon API
/* const apiKey = 'be00a2a888f846d7baff688f4850b9ed' */

const urlApi = 'https://gnews.io/api/v4/search'; 
const apiKey = '3aff5b0b6c93ea2471b0a9c559dc4aa4'



export const apiNews = async (page) => {

    const params = {
        q : 'Drogue',
        lang:'fr',
        from : '2022-08-24' ,
        sortBy : 'popularity' ,
        token : apiKey,
        page : page,
        max : 10,  
    }

    const {data} = await axios.get(urlApi,{params:params})

    return data.articles

}