
import { Routes, Route } from 'react-router-dom';
import './style.css'
import Layout from './component/Layout';
import Main from './component/Main'
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("James+bond")

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=49196d2b&s=${search}&type=movie`)
    const data = await response.json()

    setMovies(data.Search)
  }

  console.log(movies)
  

  useEffect(() => {
    getMovies()
  },[])

  return (
      <Routes>
        <Route path="/" element={<Layout getMovies={getMovies} setSearch={setSearch} />}>
          <Route index element={<Main movies={movies} setMovies={setMovies} /> }/>
        </Route>
      </Routes>
  );
}

export default App;
