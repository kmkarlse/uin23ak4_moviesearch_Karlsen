import { useParams } from "react-router-dom"



export default function MoviePage({movies}) {
    const { slug } = useParams()
    const movie = movies?.find((rec) => rec?.movie?.Title.replace(/\s/g, '-').toLowerCase() === slug)


    console.log(movie)

    return (
        <article>
            <h2>{}</h2>
            <img alt={movie?.Title} src={movie?.Poster}/>
            <p>Utgivelse år: {movie?.Year}</p>
        </article>
    )
}