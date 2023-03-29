import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Main({movies}) {
    return (
            <section className='movie-list'>
                {movies.map((movie, index) => (
                    <Link className='list' key={index} to={movie?.Title?.replace(/\s/g,'-').toLowerCase()}>
                        <MovieCard title={movie?.Title} img={movie?.Poster}/>
                    </Link>
                ))}
            </section>
    )
}