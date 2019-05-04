import React from 'react';
import styles from '../scss/About.module.scss';

export default class About extends React.Component {
  render()  {
    return (
      <div className={styles.about}>
        <h1>About</h1>
      </div>
    );
  }
}