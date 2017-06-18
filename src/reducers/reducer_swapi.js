import { FETCH_SWAPI } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
  switch (action.type) {
    case FETCH_SWAPI:
      return [ action.payload.data.results[0], ...state ];
  }
  return state;
}
