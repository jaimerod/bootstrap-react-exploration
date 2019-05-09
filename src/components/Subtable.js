import React from 'react';
import styles from '../scss/Subtable.module.scss';
import { NavLink } from "react-router-dom";

export default class Subtable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };

    console.log("Subtitle:constructor");
    console.dir(props);
  }

  makeRows(rows) {
    return rows.map((row) =>
      <tr key={row.id}>
        <td>{row.name}</td>
        <td><NavLink to={this.props.base + "/" + row.id}>Edit</NavLink></td>
        <td><NavLink to={this.props.base + "/delete/" + row.id}>Delete</NavLink>e</td>
      </tr>
    )
  }

  componentDidUpdate(prevProps) {
    // Not the best way...
    if (prevProps.data !== this.props.data) {
      console.log("Subtitle:componentDidUpdate");
      console.dir(this.props);

      this.setState({
        data: this.props.data
      });
    }
  }

  render()  {
    return (
      <table className={styles.facility}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.makeRows(this.state.data)}
        </tbody>
      </table>
    );
  }
}