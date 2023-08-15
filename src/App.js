import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./Components/MovieCard";
import env from "react-dotenv";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="row header">
                <h1>R Movies</h1>

                <div className="search">
                    <input type="text" placeholder="Search..." value={searchTerm} className="search-input" onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    <Button type="submit" onClick={()=> searchMovies(searchTerm)}>Check</Button>
                </div>
            </div>

            <div className="main row">
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie, index) => (
                                <div className="col-md-4">
                                    <MovieCard key={index} movie={movie}/>
                                </div>
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

        </div>

    )
}

export default App;