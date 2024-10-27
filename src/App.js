// src/App.js

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Removed unused 'query' state
  // const [query, setQuery] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=19d39ea6&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
          alert(data.Error || "No movies found.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <Favorites favorites={favorites} />
      <MainContent
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
        isLoading={isLoading}
      />
    </div>
  );
};

const MainContent = ({ movies, favorites, setFavorites, isLoading }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <MovieList
                movies={movies}
                addToFavorites={(movie) => {
                  if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
                    setFavorites([...favorites, movie]);
                  }
                }}
                isLoading={isLoading}
              />
            </PageTransition>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <PageTransition>
              <MovieDetail />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
