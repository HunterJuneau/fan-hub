import './App.scss';
import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavbar';
import Routes from '../helpers/Routes';

connection();

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <MyNavbar user={user} />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
