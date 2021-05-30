import {API_KEY} from "../constants/apiConstants";
import axios from "axios";

const URL = "http://www.omdbapi.com/";
const POSTER_URL = "http://img.omdbapi.com/";

export const getPoster = async (title: string) => {
    let response = await axios.get(POSTER_URL, {
        params: {
            apikey: API_KEY,
            t: title,
        }
    })
    return response.data
}

export const getSearchResults = async (query: string) => {
    let response = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            s: query,
        }
    })
    return response.data
}