import React from "react";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import User from "./User";
import Search from "./Search";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/ravi/dhawan">User</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>

        <hr />

       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/user/:fname/:lname">
            <User />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




