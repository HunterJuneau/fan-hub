import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends Component {
  logInEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.logInEvent}>
          Log In
        </button>
      </div>
    );
  }
}
