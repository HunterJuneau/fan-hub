import React from 'react';
import { Link } from 'react-router-dom';

export default class LeagueCard extends React.Component {
  state = {
    league: {},
  }

  componentDidMount() {
    this.setState({
      league: this.props.league,
    });
  }

  render() {
    const { league } = this.state;
    console.warn(league);
    return (
    <Link to={`/leagues/${league.firebaseKey}`}>
      <div className='card m-2'>
        <h2 className='card-title'>{league.name}</h2>
        <img className='card-img-bottom' src={league.logoImg} alt='logo' />
      </div>
    </Link>
    );
  }
}
