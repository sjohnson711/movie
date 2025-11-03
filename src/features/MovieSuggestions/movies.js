const token = import.meta.env.VITE_AUTH_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const movieApi = async (mood) => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    if (!res.ok) {
      throw new Error("Network response not valid");
    } // your actual API
    const data = await res.json();

    // filter through the data from Api and base the movies that show up off the mood that is assigned by genre ids 😵‍💫
    return data.results.filter((movie) => {
      if (mood === "happy") return movie.genre_ids.includes(35);
      if (mood === "sad") return movie.genre_ids.includes(878);
      if (mood === "scared") return movie.genre_ids.includes(27);
      if (mood === "excited") return movie.genre_ids.includes(28);
      if (mood === "romantic") return movie.genre_ids.includes(53);
      if (mood === "inspired") return movie.genre_ids.includes(80);
      return true;
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
