import React from 'react';
import styles from '../scss/App.module.scss';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import About from '../components/About';
import Home from '../components/Home';

export default class App extends React.Component {
  render()  {
    return (
      <BrowserRouter history={createBrowserHistory()}>
        <div className={styles.app}>
          <header>
            <h1>Test App</h1>
            <nav>
              <ul>
                <li>
                  <NavLink exact to={`/`} activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/About`} activeClassName="active">About</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
          </main>
          <footer>
            <p>Copyright 2018. All rights reserved.</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}