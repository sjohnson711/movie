import { FavoritesContext } from "../App";
import { useContext } from "react";
import styled from "styled-components";

const Display = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  font-size: 10px;
  margin: 16px;
  flex: 1;

  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 8px;
  }
`;

const Button = styled.button`
  padding: 5px;
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: cyan;
  font-family: monospace;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export default function Favorites() {
  const { favorites, removeFavorites } = useContext(FavoritesContext);
  return (
    <div className="favorites-header">
      <header>
        <nav>
          <h1> ❤️ Your Favorite Movies ♥️</h1>
        </nav>
      </header>
      <Display className="favorite-display">
        {" "}
        {favorites && favorites.length > 0 ? (
          favorites.map((m) => (
            <div style={{ width: "200px" }} key={m.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                alt={m.title}
              />

              <h1>{m.title}</h1>
              <Button onClick={() => removeFavorites(m.id)}>
                Remove Favorite
              </Button>
            </div>
          ))
        ) : (
          <h1
            className="no-favorites"
            style={{ color: "red", gridColumn: "1/-1" }} // looked up/if there are no movies this will span the entire center of the grid.
          >
            no favorites
          </h1>
        )}
      </Display>
    </div>
  );
}
