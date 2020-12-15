import React from 'react';
import { getLeague } from '../helpers/data/leagueData';
import getLeagueTeams from '../helpers/data/teamData';
import TeamCard from '../components/Cards/TeamCard';

export default class LeagueView extends React.Component {
  state = {
    league: {},
    teams: [],
  };

  componentDidMount() {
    const leagueId = this.props.match.params.id;
    getLeague(leagueId).then((response) => {
      this.setState({
        board: response,
      });
    });
    getLeagueTeams(leagueId).then((response) => {
      this.setState({
        teams: response,
      });
    });
  }

  render() {
    const { league, teams } = this.state;
    const renderTeams = () => teams.map((team) => <TeamCard team={team} key={team.firebaseKey} />);
    return (
      <div>
        <h1>{league.name}</h1>
        <div className='d-flex flex-wrap container'>
          {renderTeams()}
        </div>
      </div>
    );
  }
}
