import React from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import DiscoverMoviesPage from "./components/DiscoverMoviesPage";
import AboutPage from "./components/AboutPage";
function App() {
  return (
    <Router>
      <div className="App">
        <navBar>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </navBar>
        <AboutPage />
        <Switch>
          <Route path="/discover" component={DiscoverMoviesPage} />
          {/* <Route path="/about" component={AboutPage} /> */}
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
