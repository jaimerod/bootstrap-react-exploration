import React from 'react';
import styles from '../scss/Home.module.scss'

export default class Home extends React.Component {
  render()  {
    return (
      <div className={styles.home}>
        <h1>Home</h1>
      </div>
    );
  }
}