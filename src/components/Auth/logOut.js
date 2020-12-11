import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class LogOut extends Component {
  logOutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div>
        <button className='btn btn-warning' onClick={this.logOutEvent}>
          Log Out
        </button>
      </div>
    );
  }
}
