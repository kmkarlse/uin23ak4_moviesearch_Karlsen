
import { Routes, Route } from 'react-router-dom';
import './style.css'
import Layout from './component/Layout';
import Main from './component/MovieCards'
import { useEffect, useState } from 'react';
import MoviePage from './component/MoviePage';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("James+bond")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=49196d2b&s=${search}&type=movie`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    getMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log(movies)

  return (
      <Routes>
        <Route path="/" element={<Layout getMovies={getMovies} setSearch={setSearch} />}>
          <Route index element={<Main movies={movies} setMovies={setMovies} /> }/>
          <Route path=':slug' element={<MoviePage movies={movies} />  } />
        </Route>
      </Routes>
  );
}

export default App;
