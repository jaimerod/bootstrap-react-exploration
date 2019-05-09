import React from 'react';
import styles from '../scss/Contact.module.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      addresses: [],
      attachments: [],
      contacts: [],
      license_status: { id: 1, name: "No Action" },
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputText = this.inputText.bind(this);

    fetch('https://295f050e-eb77-4457-98ed-e058ca852c33.mock.pstmn.io/contact/1')
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState(data);
        console.dir(data);
      });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  inputText(name) {
    return (
      <li key={this.state[name]}>
        <label htmlFor={name}>{name}</label>
        <input type="text" value={this.state[name]} name={name} onChange={this.handleChange} />
      </li>
    )
  }

  render()  {
    return (
      <div className={styles.contact}>
        <h1>Contact</h1>
        {this.inputText('id')}
        {this.inputText('name')}
        {this.inputText('title')}
        {this.inputText('email')}
        {this.inputText('phone')}
        <input type="submit" onClick={this.handleSubmit}/>
      </div>
    );
  }
}