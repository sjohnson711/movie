import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOut from "/src/shared/LayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

export const FavoritesContext = React.createContext(null);

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("there is an error", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorites(movie) {
    setFavorites((prev) => {
      const alreadyExists = prev.some((m) => m.id === movie.id);
      if (!alreadyExists) {
        const fav = [...prev, movie];
        console.log(fav);
        return fav;
      }
      return prev;
    });
  }

  const removeFavorites = (id) => {
    setFavorites((prev) => {
      return prev.filter((m) => m.id !== id);
    });
  };

  return (
    <div className="App">
      <FavoritesContext.Provider
        value={{ favorites, addFavorites, removeFavorites }}
      >
        <Router>
          <Routes>
            <Route element={<LayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </Router>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
