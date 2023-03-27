import { Outlet, Link } from "react-router-dom";


export default function Layout() {
    return (
        <div className="container">
            <header>
                <Link to='/'>
                    <h1>Movies</h1>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    )
}