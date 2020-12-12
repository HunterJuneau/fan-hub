import React from 'react';
import getPublicLeagues from '../helpers/data/leagueData';
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
    const showLeagues = () => {
      console.warn(leagues);
      leagues.map((league) => <LeagueCard league={league} />);
    };
    return (
      <div className='text-center'>
        <h1>Leagues</h1>
        <div className='d-flex'>{showLeagues()}</div>
      </div>
    );
  }
}
