import {createStore} from '@reduxjs/toolkit'
import {RootAction, rootReducer, RootState} from "./reducers/reducers";

export default createStore<RootState, RootAction, unknown, unknown>(rootReducer)

