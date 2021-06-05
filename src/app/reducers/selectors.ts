import {RootState} from "./reducers";

export const getMode = (state: RootState) => state.mode;
export const getQuery = (state: RootState) => state.query;
export const getId = (state: RootState) => state.id;
