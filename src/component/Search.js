
export default function Search({setSearch, getMovies}) {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="movie" onChange={handleSearch} className="search"/>
            <button type="submit" onClick={getMovies}>søk</button>
        </form>
    )
}