import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getMode, getQuery} from "../reducers/selectors";
import {searchResults} from "../utils/requests";
import SearchResultTile from "./searchResultTile";

const SearchResults: React.FC = props => {

    const query = useSelector(getQuery)
    const mode = useSelector(getMode)

    const [results, setResults] = useState(new Array<JSX.Element>())
    const [toDisplay, setToDisplay] = useState(20)
    const [pageNumber, setPageNumber] = useState(2)


    const [isResultsMounted, setResultsMounted] = useState(true)

    useEffect(() => {
        if(query !== "") {
            searchResults(query, pageNumber, toDisplay).then(
                r => {
                    if(isResultsMounted) setResults(r.map((result: {}) => <SearchResultTile children={{result: result}}/>))
                }
            )
        }
        return () => setResultsMounted(false)
    }, [query, toDisplay, pageNumber])

    const incrementPage = () => {

    }

    const decrementPage = () => {

    }

    return (
        <div>
            { mode === "search" && query !== "" && results.map(a => a) }
        </div>
    );
}

export default SearchResults;