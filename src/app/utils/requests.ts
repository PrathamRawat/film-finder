import {API_KEY} from "../constants/apiConstants";
import axios from "axios";

const URL = "https://www.omdbapi.com/";

export interface SearchResult {
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
    poster: string,
}

export const getMovieById = async (id: string) => {
    let response = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            i: id,
            type: "movie",
        }
    })
    return response.data
}

export const getSearchResults = async (query: string, pageNumber: number) => {
    let response = await axios.get(URL, {
        params: {
            apikey: API_KEY,
            s: query,
            page: pageNumber,
            type: "movie",
        }
    })
    return response.data
}

export const searchResults = async (query: string, pageNumber: number, rowsPerPage: number) => {
    let output: never[] = []
    for (let i = 1; i <= rowsPerPage / 10; i++) {
        output = output.concat((await getSearchResults(query, (((pageNumber - 1) * (rowsPerPage / 10)) + i))).Search)
    }
    return output
}

export const countSearchResults = async (query: string) => {
    let response = await getSearchResults(query, 1)
    return response.totalResults
}

export const isQueryValid = async (query: string) => {
    let response = await getSearchResults(query, 1)
    return response.Response
}