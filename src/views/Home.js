import React from 'react';
import { getPublicLeagues } from '../helpers/data/leagueData';
import LeagueCard from '../components/Cards/LeagueCard';

export default class Home extends React.Component {
  state = {
    leagues: [],
  };

  componentDidMount() {
    getPublicLeagues().then((response) => {
      this.setState({
        leagues: response,
      });
    });
  }

  render() {
    const { leagues } = this.state;
    const renderLeagues = () => (
      leagues.map((league) => <LeagueCard league={league} key={league.firebaseKey} />)
    );
    return (
      <div className='text-center'>
        <h1>Leagues</h1>
        <div className='d-flex'>{renderLeagues()}</div>
      </div>
    );
  }
}
