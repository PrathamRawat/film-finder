import React, {useEffect, useState} from "react";
import {getMovieById} from "../../utils/requests";
import {useSelector} from "react-redux";
import {getId, getMode} from "../../reducers/selectors";
import loading from "../images/loading.gif"
import noImage from "../images/no-image.png"
import "./view.css"

const View: React.FC = (props) => {

    let [poster, setPoster] = useState(loading)
    let [plot, setPlot] = useState("")
    let [title, setTitle] = useState("")
    let [year, setYear] = useState("")
    let [director, setDirector] = useState("")
    let [actors, setActors] = useState("")
    let [language, setLanguage] = useState("")
    let [runtime, setRuntime] = useState("")
    let [released, setReleased] = useState("")
    let [genre, setGenre] = useState("")

    const mode = useSelector(getMode)
    const id = useSelector(getId)

    useEffect(() => {
        getMovieById(id).then(
            movie => {
                if(movie.Poster !== "N/A") setPoster(movie.Poster); else setPoster(noImage);
                if(movie.Plot !== "N/A") setPlot(movie.Plot); else setPlot("");
                if(movie.Director !== "N/A") setDirector(movie.Director); else setDirector("unknown");
                if(movie.Actors !== "N/A") setActors(movie.Actors); else setActors("unknown");
                if(movie.Title !== "N/A") setTitle(movie.Title); else setTitle("unknown");
                if(movie.Year !== "N/A") setYear(movie.Year); else setYear("");
                if(movie.Language !== "N/A") setLanguage(movie.Language); else setLanguage("unknown");
                if(movie.Runtime !== "N/A") setRuntime(movie.Runtime); else setRuntime("unknown");
                if(movie.Released !== "N/A") setReleased(movie.Released); else setReleased("unknown");
                if(movie.Genre !== "N/A") setGenre(movie.Genre); else setGenre("unknown");
            }
        )
    }, [id])

    if(mode === "search") return (<div/>)

    return (
        <div>
            <span className={"movieTitle"}>{title} ({year})</span>
            <img src={poster} alt={"Movie Poster"} className={"poster"}/>
            <p className={"plot"}>{plot}</p>
            <p className={"movieDetail"}>Director <span className={"emphasis"}>{director}</span></p>
            <p className={"movieDetail"}>Starring <span className={"emphasis"}>{actors}</span></p>
            <p className={"movieDetail"}>Released <span className={"emphasis"}>{released}</span></p>
            <p className={"movieDetail"}>Language <span className={"emphasis"}>{language}</span></p>
            <p className={"movieDetail"}>Runtime <span className={"emphasis"}>{runtime}</span></p>
            <p className={"movieDetail"}>Genre <span className={"emphasis"}>{genre}</span></p>
        </div>
    );
}

export default View;