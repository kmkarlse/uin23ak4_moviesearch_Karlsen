export default function MovieCard({title, img}) {
    return (
        <article>
            <h3>{title}</h3>
            <img alt={title} src={img} />
        </article>
    )
}