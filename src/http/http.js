/* eslint-disable */
import axios from 'axios';


const url = 'https://disease.sh/v3/covid-19/all';

export const fetchGlobalData = async () => {
    try{
        const {
            data: {cases, todayCases, deaths,todayDeaths, recovered, todayRecovered},
        } = await axios.get(url);

        return {cases, todayCases, deaths, todayDeaths,recovered, todayRecovered};
        

    } catch (error) {
        console.log(error);
    }
}

// export const fetchCountriesData = async () => {
//     try {
//         const{
//             data: {Countries},
//         } = await axios.get(url);
        
//         return Countries.map((country) => country.Country);
        
//     } catch (error){
//         console.log(error);
//     }
// }