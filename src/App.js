import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./Components/MovieCard";
import env from "react-dotenv";

const api_url = `${env.API_URL}`;


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const searchMovies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    // hook to run on component mount
    useEffect(() => {
        searchMovies("Blacklist");
    }, []);



    return (
        <div className="App">
            <h1>R Movies</h1>

            <div className="search">
                <input type="text" placeholder="Search..." value={searchTerm} className="search-input" onChange={(e) => {setSearchTerm(e.target.value)}}/>
                <button type="submit" onClick={()=> searchMovies(searchTerm)}>Check</button>
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie, index) => (
                                <MovieCard key={index} movie={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>

    )
}

export default App;