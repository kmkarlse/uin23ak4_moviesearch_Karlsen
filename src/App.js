
import { Routes, Route } from 'react-router-dom';
import './style.css'
import Layout from './component/Layout';
import Main from './component/Main'
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=49196d2b&s=James+Bond&type=movie`)
    const data = await response.json()

    setMovies(data.Search)
   

  }

  console.log(movies)
  

  useEffect(() => {
    getMovies()
  },[])

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main movies={movies} setMovies={setMovies} /> }/>
        </Route>
      </Routes>
  );
}

export default App;
