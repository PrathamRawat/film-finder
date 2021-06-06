import React from "react";
import "./ui.css"
import {useDispatch} from "react-redux";
import {SEARCH_MODE} from "../../reducers/actionTypes";

const Header: React.FC = props => {

    const dispatch = useDispatch()

    const resetPage = () => {
        dispatch({
            type: SEARCH_MODE,
        })
    }

    return (
        <div>
            <div className={"header"} onClick={resetPage}>
                FilmFinder
            </div>
            <div className={"headerSpacer"}>
                
            </div>
        </div>
    );
}

export default Header;