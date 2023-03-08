import { useState,useEffect  } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./filter";
import { motion , AnimatePresence} from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);


  useEffect(() => {
    fetchingPopular();
  }, []);

  const fetchingPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9966b4978db5161425ad4536d8f312fb&language=en-US&page=1"
    );

    const movies = await data.json();
    setPopular(movies.results);
    setFilter(movies.results)
    console.log(movies)
  };
  
  return <div className="App">
    <Filter popular={popular} setFilter={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

    <motion.div layout className="popular-movies">
      <AnimatePresence>
    {filter.map((movie) => {
      return <Movie key={movie.id} movie={movie} />
    })}
        </AnimatePresence>
    </motion.div>
  </div>;
}

export default App;
