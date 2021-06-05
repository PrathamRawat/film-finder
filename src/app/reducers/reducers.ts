import {Action} from "@reduxjs/toolkit";
import {SEARCH, SEARCH_MODE, VIEW, VIEW_MODE} from "./actionTypes";

export interface RootState {
    mode: "view" | "search",
    query: string,
    id: string,
}

export interface RootAction extends Action {
    payload: string,
}

export const initialState: RootState = {
    mode: "search",
    query: "",
    id: "",
}

export const rootReducer = (state = initialState, action: RootAction) => {
    switch (action.type) {
        case SEARCH_MODE:
            return {
                ...state,
                mode: "search",
            }
        case VIEW_MODE:
            return {
                ...state,
                mode: "view"
            }
        case SEARCH:
            return {
                ...state,
                query: action.payload,
            }
        case VIEW:
            return {
                ...state,
                id: action.payload,
            }
        default:
            return state
    }
}
