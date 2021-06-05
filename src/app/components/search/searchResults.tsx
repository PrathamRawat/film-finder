import React, {createRef, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getMode, getQuery} from "../../reducers/selectors";
import {countSearchResults, isQueryValid, searchResults} from "../../utils/requests";
import SearchResultTile from "./searchResultTile";

const SearchResults: React.FC = props => {

    const query = useSelector(getQuery)
    const mode = useSelector(getMode)

    const rowsPerPageRef = createRef<HTMLSelectElement>()

    const [results, setResults] = useState(new Array<JSX.Element>())
    const [toDisplay, setToDisplay] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)

    const [numResults, setNumResults] = useState(0)
    const [isErrored, setErrored] = useState(false)

    useEffect(() => {
        if(query !== "" && mode === "search") {
            isQueryValid(query).then(
                valid => {
                    if(valid === "True") {
                        setErrored(false)
                        countSearchResults(query).then(
                            num => {
                                setNumResults(num)
                            }
                        )
                        searchResults(query, pageNumber, toDisplay).then(
                            r => {
                                setResults(r.map((result: {}) => <SearchResultTile children={{result: result}}/>))
                            }
                        )
                    } else {
                        setErrored(true)
                    }
                }
            )
        }
    }, [query, toDisplay, pageNumber])

    const incrementPage = () => {
        if(pageNumber * toDisplay < numResults) setPageNumber(pageNumber + 1)
    }

    const decrementPage = () => {
        if(pageNumber > 1) setPageNumber(pageNumber - 1)
    }

    const updateRows = () => {
        if(rowsPerPageRef.current !== null) {
            setToDisplay(parseInt(rowsPerPageRef.current.value))
            setPageNumber(1)
        }
    }

    // If the app is in view mode, and viewing a particular film
    if (mode === "view") return (<div/>)
    // If the user has not entered a query yet
    if (query === "") return (
        <div className={"searchMessaging"}>
            The world's films at your fingertips.
        </div>
    )
    // If the user's query had no search results
    if (isErrored) return (
        <div className={"searchMessaging"}>
            Your search query contained no results.
        </div>
    )
    // If the user's query has been successful
    return (
        <div>
            <div className={"resultContainer"}>
                { results.map(a => a) }
            </div>
            <div className={"searchInfo"}>
                Your search contained { numResults } results.
            </div>
            <div className={"pageNavigation"}>
                <button onClick={decrementPage} disabled={pageNumber <= 1} className={"pageButton"}>Prev Page</button>
                <button onClick={incrementPage} disabled={pageNumber * toDisplay > numResults} className={"pageButton"}>Next Page</button>
            </div>
            <div className={"filterContainer"}>
                Rows per Page
                <select ref={rowsPerPageRef} onChange={updateRows} className={"displaySelector"}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
}

export default SearchResults;