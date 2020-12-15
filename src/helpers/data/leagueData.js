import axios from 'axios';

const baseUrl = 'https://fan-hub-b2eec-default-rtdb.firebaseio.com/';

const getPublicLeagues = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/leagues.json?orderBy="private"&equalTo=false`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getLeague = (leagueId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/leagues/${leagueId}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

export { getPublicLeagues, getLeague };
