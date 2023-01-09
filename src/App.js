import "./App.css";
import SearchHeader from "./components/SearchHeader";
import Sidebar from "./components/Sidebar";
// import Movies from "./movieList.json";
import MoviesList from "./components/MoviesList/index";

function App() {
  return (
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="movieContainer">
        <div className="movie-wrapper">
          <SearchHeader />
          <MoviesList />
        </div>
      </div>
    </div>
  );
}

export default App;
