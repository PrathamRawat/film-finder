import React, {createRef} from "react";
import {useDispatch} from "react-redux";
import {SEARCH, SEARCH_MODE} from "../../reducers/actionTypes";
import "./search.css"

const Search: React.FC = props => {

    let queryRef = createRef<HTMLInputElement>()
    const dispatch = useDispatch()

    const search = () => {
        if(queryRef.current != null) {
            dispatch({
                type: SEARCH_MODE,
            })
            dispatch({
                type: SEARCH,
                payload: queryRef.current.value,
            })
        }
    }

    return (
        <div className={"searchContainer"}>
            <input type={"text"} ref={queryRef} className={"searchBar"}/>
            <button onClick={search} className={"searchButton"}>Search</button>
        </div>
    );
}

export default Search;