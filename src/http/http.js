/* eslint-disable */
import axios from 'axios';


const url = 'https://api.covid19api.com/summary';

export const fetchGlobalData = async () => {
    try{
        const{
            data: {Global},
        } = await axios.get(url);
        return {Global};

    } catch (error) {
        console.log(error);
    }
}