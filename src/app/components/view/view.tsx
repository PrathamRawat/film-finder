import React, {useEffect, useState} from "react";
import {getMovieById} from "../../utils/requests";
import {useSelector} from "react-redux";
import {getId, getMode} from "../../reducers/selectors";
import loading from "../images/loading.gif"

const View: React.FC = (props) => {

    let [data, setData] = useState({
        Poster: loading,
        Title: "unknown",
        Runtime: "unknown",

    })

    const mode = useSelector(getMode)
    const id = useSelector(getId)

    useEffect(() => {
        getMovieById(id).then(
            movie => {
                console.log(movie)
                setData(movie)
            }
        )
    }, [id])

    if(mode === "search") return (<div/>)

    return (
        <div>
            <h1>{data.Title}</h1>
            <img src={data.Poster} alt={"Movie Poster"}/>

        </div>
    );
}

export default View;