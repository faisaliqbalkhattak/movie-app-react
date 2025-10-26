# 🎬 Movie Search App

A modern React application for searching and discovering movies using The Movie Database (TMDB) API with real-time search analytics powered by Appwrite.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.11-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.15-blue)
![Appwrite](https://img.shields.io/badge/Appwrite-21.2.1-red)

## ✨ Features

- 🔍 **Real-time Movie Search** - Search through thousands of movies with debounced input
- 🎯 **Smart Search Analytics** - Track search terms and popular queries using Appwrite database
- 📱 **Responsive Design** - Built with TailwindCSS for mobile-first design
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast development and builds
- 🎭 **Popular Movies** - Discover trending and popular movies when not searching
- 🔄 **Debounced Search** - Optimized API calls with 500ms debouncing to prevent spam
- 📊 **Search Insights** - Store and analyze user search patterns

## 🚀 Tech Stack

- **Frontend**: React 19.1.1 with Hooks
- **Build Tool**: Vite 7.1.11
- **Styling**: TailwindCSS 4.1.15
- **Database**: Appwrite 21.2.1
- **Movie Data**: The Movie Database (TMDB) API
- **State Management**: React useState and useEffect hooks
- **Debouncing**: react-use library

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))
- Appwrite project setup ([Create one here](https://appwrite.io/))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project01
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # TMDB API Configuration
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   
   # Appwrite Configuration
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_table_name
   VITE_APPWRITE_PROJECT_NAME=your_project_name
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Search.jsx          # Search input component
│   ├── Spinner.jsx         # Loading spinner
│   └── MovieCard.jsx       # Individual movie card
├── App.jsx                 # Main application component
├── appwrite.js            # Appwrite database configuration
├── main.jsx               # React app entry point
└── index.css              # Global styles and TailwindCSS
```

## 🔧 Configuration

### Appwrite Database Setup

Create a table in your Appwrite database with these attributes:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `searchTerm` | String | Yes | The search query |
| `count` | Integer | Yes | Number of times searched |
| `movie_id` | Integer | Yes | TMDB movie ID |
| `movie_url` | String | No | Movie poster URL |

### TMDB API Setup

1. Create an account at [TMDB](https://www.themoviedb.org/)
2. Go to Settings → API
3. Request an API key
4. Add the API key to your `.env.local` file

## 🎯 How It Works

### Search Flow
1. **User Input** → Search term entered in input field
2. **Debouncing** → 500ms delay to prevent excessive API calls
3. **API Call** → Query TMDB API for movies
4. **Display Results** → Show movies in responsive grid
5. **Analytics** → Save search term to Appwrite database

### Popular Movies
- Loads popular movies on initial app load
- Shows when search field is empty
- Uses TMDB's discover endpoint with popularity sorting

## 🔍 API Endpoints Used

- **Search Movies**: `GET /search/movie?query={searchTerm}`
- **Popular Movies**: `GET /discover/movie?sort_by=popularity.desc`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The app uses TailwindCSS for styling with:
- Responsive design principles
- Mobile-first approach
- Custom gradient text effects
- Loading states and animations

## 🔒 Security Notes

- API keys are stored in environment variables
- Never commit `.env.local` to version control
- Appwrite handles authentication and database security

## 🚨 Common Issues

### Movies not loading
- Check your TMDB API key is valid
- Verify API endpoint URLs are correct
- Check browser console for network errors

### Appwrite database errors
- Ensure environment variables are set correctly
- Verify database and table names match your Appwrite setup
- Check table permissions allow read/write operations

### Search not working
- Verify the Search component input binding
- Check debouncing is working properly
- Look for JavaScript errors in console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Appwrite](https://appwrite.io/) for the backend database services
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for the amazing development experience
