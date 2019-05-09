import React from 'react';
import styles from '../scss/Home.module.scss';
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facilities: [
        {
          id: 1,
          name: ''
        }
      ]
    }

    fetch('https://295f050e-eb77-4457-98ed-e058ca852c33.mock.pstmn.io/facilities')
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState(data);
      });
  }

  facilities(data) {
    const rendered = data.map((facility) =>
      <li key={facility.id}>
        <NavLink to={"/facility/" + facility.id}>{facility.name}</NavLink>
      </li>
    )

    return (
      <ul>{rendered}</ul>
    )
  }

  render()  {
    return (
      <div className={styles.home}>
        <h1>Home</h1>
        {this.facilities(this.state.facilities)}
      </div>
    );
  }
}