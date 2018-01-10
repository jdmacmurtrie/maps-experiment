import { POSITION } from '../actions/position'

let initialState = {
  lat: 48.858608,
  lng: 2.294471
};

const changePosition = (state = initialState, action) => {
  switch (action.type) {
    case POSITION:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng
      })
      default:
        return state;
  }
};

export default changePosition
