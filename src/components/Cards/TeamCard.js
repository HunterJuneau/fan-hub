import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamCard extends React.Component {
  state = {
    team: {},
  };

  componentDidMount() {
    this.setState({
      team: this.props.team,
    });
  }

  render() {
    const { team } = this.state;
    return (
      <Link to={`/${team.firebaseKey}`}>
        <div className='card'>
          <img className='card-img-top' src={team.logoImg} alt='logo' />
          <h3 className='card-title'>{team.name}</h3>
        </div>
      </Link>
    );
  }
}
