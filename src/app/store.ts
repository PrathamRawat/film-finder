import { configureStore } from '@reduxjs/toolkit'
import {appReducer, searchReducer, viewReducer} from "./reducers/reducers";

export const store = configureStore({
    reducer: {
        app: appReducer,
        view: viewReducer,
        search: searchReducer,
    },
})

