import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Main({movies, setMovies}) {
    return (
        <section className='MovieCard'>
            {movies.map((movie, index) => (
                <Link key={index} className='list' to={movie?.title}>
                    <MovieCard title={movie?.Title} img={movie?.Poster}/>
                </Link>
            ))}
        </section>
    )
}