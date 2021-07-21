import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Componets/Header';
import Main from './Componets/Main';
import Footer from './Componets/Footer';

function App() {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/webdev">WebDev</Link>
            </li>
            <li>
              <Link to="/graphicdesign">Graphic Design</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
