import {createSlice} from "@reduxjs/toolkit";

export const app = createSlice({
    name: "app",
    initialState: {
        app: "search"
    },
    reducers: {
        viewMode: state => {
            state.app = "view"
        },
        searchMode: state => {
            state.app = "search"
        }
    }
})

export const { viewMode, searchMode } = app.actions

export const appReducer = app.reducer

export const search = createSlice({
    name: "search",
    initialState: {
        query: "",
    },
    reducers: {
        newSearch: (state, action) => {
            state.query = action.payload
        }
    }
})

export const newSearch = search.actions

export const searchReducer = search.reducer

export const view = createSlice({
    name: "view",
    initialState: {
        id: "",
    },
    reducers: {
        viewMovie: (state, action) => {
            state.id = action.payload
        }
    }
})

export const viewMovie = view.actions

export const viewReducer = view.reducer