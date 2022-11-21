import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsFillCalendarDateFill
} from "react-icons/bs"
import { FaStar } from "react-icons/fa"

import MovieCard from '../components/MovieCard'

import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    const formatCurrency = (number) => { // Função para formatar os números do orçamento e receita
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&append_to_response=videos&language=pt-BR`;
        getMovie(movieUrl);
    }, []);

    return (
        <div className="movie-page">{movie && (
            <>
                <MovieCard movie={movie} showLink={false} />
                <div className="information">
                    <div className="info">
                        <h3>
                            <FaStar /> Nota:
                        </h3>
                        <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsFillCalendarDateFill /> Ano de lançamento:
                        </h3>
                        <p>{movie.release_date}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} Minutos.</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </>
        )}</div>
    )
}

export default Movie