import { useState, useContext } from "react";
import styled from "styled-components";
import { moods } from "./MoodData";
import { movieApi } from "../MovieSuggestions/movies";
import { FavoritesContext } from "../../App";
import { ClipLoader } from "react-spinners";
const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: red;
    background: #ff9900;
  }

  &.selected {
    border-color: #ff9900;
    background-color: rgb(204, 204, 255);
  }
`;

const MovieItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
`;

const EmptyState = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  text-align: center;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 4px;
  font-family: monospace;
  border-radius: 8px;
  width: 300px;
  margin-top: 50px;

  &::placeholder {
    color: lightpurple;
    opacity: 0.5;
  }
`;

const Favorites = styled.button`
  background-color: rgb(204, 204, 255);
  padding: 10px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  border: none;

  .favored {
    background-color: red;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default function MoodSelector() {
  const { addFavorites } = useContext(FavoritesContext);
  const [movieList, setMovieList] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [userSelect, setUserSelect] = useState("");
  const [matchingMovie, setMatchingMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoritedMovies, setFavoritedMovies] = useState(new Set());

  //
  function handleMoodClick(moodName) {
    setSelectedMood(moodName);
    setUserSelect(""); // clear search
    setMatchingMovie([]); // clear previous search
    setMovieList([]); // clear previous movies
    setLoading(true);

    movieApi(moodName) //Api mapping throught the Api
      .then((movies) => {
        //handling the promise
        setMovieList(movies);
        setMatchingMovie(movies);
      })
      .finally(() => setLoading(false));
  }

  function handleInputChange(e) {
    //taking the for value
    const value = e.target.value;
    setUserSelect(value);

    if (value.trim() === "") {
      setMatchingMovie(() => movieList); // No movies are shown at that time
    } else {
      const result = movieList.filter((movie) =>
        movie.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setMatchingMovie(result);
    }
  }
  const loadSpinner = () => {
    return (
      <div>
        <ClipLoader
          color="red"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  };

  return (
    <div className="mood-container-button">
      <h2>Select Your Mood</h2>
      {moods.map((mood) => (
        <Button
          key={mood.id}
          className={selectedMood === mood.name ? "selected" : ""}
          onClick={() => handleMoodClick(mood.name)}
        >
          {mood.icon} {mood.name}
        </Button>
      ))}

      {loading ? (
        <EmptyState>{loadSpinner}</EmptyState>
      ) : matchingMovie.length > 0 ? (
        <MovieCard>
          {matchingMovie.map((movie) => (
            <MovieItem key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <Favorites
                onClick={() => {
                  addFavorites(movie);
                  setFavoritedMovies((prev) => new Set([...prev, movie.id]));
                }}
                style={
                  favoritedMovies.has(movie.id)
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "lightpurple" }
                }
              >
                {favoritedMovies.has(movie.id)
                  ? "♥️ Favorited ♥️"
                  : "Add to Favorites"}
              </Favorites>
            </MovieItem>
          ))}
        </MovieCard>
      ) : selectedMood ? (
        <EmptyState>No movies found</EmptyState>
      ) : null}

      <form>
        <Input
          name="user-input"
          autoComplete="off"
          type="text"
          value={userSelect}
          onChange={handleInputChange}
          placeholder="Search for movie..."
        />
      </form>
    </div>
  );
}
