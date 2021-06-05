import React from "react";
import {useDispatch} from "react-redux";
import {VIEW, VIEW_MODE} from "../reducers/actionTypes";
import {SearchResult} from "../utils/requests";

const SearchResultTile: React.FC = (props) => {

    // @ts-ignore
    const result: SearchResult = props.children.result;
    const dispatch = useDispatch()

    const view = () => {
        // Sets the ID to view
        dispatch({
            type: VIEW,
            payload: result.imdbID,
        })
        // Sets the app state to view
        dispatch({
            type: VIEW_MODE,
        })
    }

    return (
        <div onClick={view}>
            {result.Title}
        </div>
    );
}

export default SearchResultTile;