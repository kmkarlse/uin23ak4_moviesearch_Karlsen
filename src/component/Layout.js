import { Outlet, Link } from "react-router-dom";
import Search from './Search'

export default function Layout({setSearch, getMovies}) {
    return (
        <div className="container">
            <header>
                <Link to='/'>
                    <h1>Movies</h1>
                </Link>
                <Search  setSearch={setSearch} getMovies={getMovies} />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}