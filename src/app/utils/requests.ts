import {API_KEY} from "../constants/apiConstants";
import axios from "axios";

const URL = "http://www.omdbapi.com/";
const POSTER_URL = "http://img.omdbapi.com/";

export interface SearchResult {
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
    poster: string,
}

export const getPoster = async (title: string) => {
    let response = (await axios.get(POSTER_URL, {
        params: {
            apikey: API_KEY,
            t: title,
        }
    })).data
    return response
}

export const getSearchResults = async (query: string, pageNumber: number) => {
    let response = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            s: query,
            page: pageNumber,
        }
    })
    return response.data
}

export const searchResults = async (query: string, pageNumber: number, rowsPerPage: number) => {
    let output: never[] = []
    for (let i = 1; i <= rowsPerPage / 10; i++) {
        output = output.concat((await getSearchResults(query, (rowsPerPage / 10) * (pageNumber + i))).Search)
    }
    return output
}