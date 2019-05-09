import React from 'react';
import styles from '../scss/App.module.scss';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// Components
import Address from '../components/Address';
import Attachment from '../components/Attachment';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Facility from '../components/Facility';

export default class App extends React.Component {
  render()  {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <header>
            <h1>Test App</h1>
            <nav>
              <ul>
                <li>
                  <NavLink exact to={`/`} activeClassName="active">Home</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/address/:id" component={Address} />
            <Route path="/contact/:id" component={Contact} />
            <Route path="/attachment/:id" component={Attachment} />
            <Route path="/facility/:id" component={Facility} />
          </main>
          <footer>
            <p>Copyright 2018. All rights reserved.</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}