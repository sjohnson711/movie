# 🎬 Movie Mood Selector

A React-based web application that helps users discover movies based on their current mood. Browse movies by mood, search for specific titles, and save your favorites for later!

## ✨ Features

- **Mood-Based Discovery**: Select from various moods to get personalized movie recommendations
- **Real-Time Search**: Search through movies by title with instant filtering
- **Favorites Management**: Add movies to your favorites and persist them across sessions
- **Responsive Design**: Clean, modern UI with styled-components
- **Local Storage**: Your favorites are automatically saved to your browser

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Context API** - Global state management for favorites
- **Styled Components** - CSS-in-JS styling
- **Local Storage** - Data persistence
- **TMDB API** - Movie data source

## Prerequisites

Before you begin, ensure you have the following installed:

- 🚀 Node.js (v14 or higher)
- npm or yarn
- TMDB API key

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd movie-mood-selector
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up your TMDB API key**

   Add your API key in the `movies.js` file

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎯 How It Works

### Context Architecture

The app uses React Context API for state management:

```
App.jsx (Provider)
├── FavoritesContext provides:
│   ├── favorites (array)
│   ├── addFavorites (function)
│   └── removeFavorites (function)
└── All child routes can access this context
```

**Why Context?** The favorites need to be shared between multiple routes (Home and Favorites pages). By lifting the Context Provider to `App.jsx`, both routes can access and modify the same favorites data.

### Key Components

#### App.jsx

- Creates and provides `FavoritesContext`
- Manages favorites state with localStorage persistence
- Wraps all routes with the Context Provider

#### MoodSelector.jsx

- Consumes `addFavorites` from context
- Handles mood selection and movie fetching
- Displays movie cards with "Add to Favorites" buttons
- Implements search functionality

#### Favorites.jsx

- Consumes `favorites` and `removeFavorites` from context
- Displays all saved favorite movies
- Allows users to remove movies from favorites

## 💾 Data Persistence

Favorites are automatically saved to `localStorage`:

- When you add a movie, it's saved immediately
- When you refresh the page, your favorites are restored
- When you remove a movie, the change is persisted

## 🎨 Styling

The app uses styled-components for modular, component-scoped styling:

- No CSS naming conflicts
- Dynamic styling based on props
- Clean, maintainable code

## 🔮 Future Enhancements

- Add movie trailers and detailed information
- Implement user ratings and reviews
- Add "watched" vs "want to watch" lists
- Create shareable favorite lists
- Add filtering by genre, year, rating
- Implement dark/light theme toggle

## 🐛 Troubleshooting

### Favorites not showing up?

- Make sure `FavoritesContext` is imported from `App.jsx`
- Verify the Context Provider wraps your routes
- Check that you're destructuring the context value:
  ```JavaScript
  const { favorites } = useContext(FavoritesContext)
  ```

### Movies not loading?

- Verify your TMDB API key is correct
- Check the browser console for API errors
- Ensure you have an active internet connection

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Icons and design inspiration from modern UI trends
- Built with ❤️ using React

## License

This project was created as a capstone project for educational purposes.

## Contributing

Contributions are welcome!
