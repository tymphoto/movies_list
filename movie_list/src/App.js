import { Routes, Route } from 'react-router-dom';
import NavbarBootstrap from './components/NavbarBootsrap/NavbarBoostrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <NavbarBootstrap />
      <div className="container_routes">
        <Routes>
          <Route
            path="/"
            element={(
              <div className="moviesList">
                <MoviesList />
              </div>
        )}
          />
          {/* <Route
            path="/favourite"
            element={(
              <Favourite />
        )}
          /> */}
          <Route
            path="*"
            element={(
              <div>
                <h2>Ошибочка, нет такой страницы</h2>
                <img src="https://gif.cmtt.space/3/club/1f/b8/ae/ea74f32bd5e2d2.png" alt="error" />
              </div>
        )}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
