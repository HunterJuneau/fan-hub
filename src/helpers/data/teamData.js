import axios from 'axios';

const baseUrl = 'https://fan-hub-b2eec-default-rtdb.firebaseio.com/';

const getLeagueTeams = (leagueId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/teams.json?orderBy="leagueId"&equalTo="${leagueId}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

export default getLeagueTeams;
