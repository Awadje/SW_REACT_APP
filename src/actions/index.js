import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/people/';

export const FETCH_SWAPI = 'FETCH_SWAPI';

export function fetchSwapi(name) {
  const url = `${ROOT_URL}&?search=${name}`;
  const request = axios.get(url);

  return {
    type: FETCH_SWAPI
    payload: request
  };
}
