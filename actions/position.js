export const POSITION = "POSITION"

let position = (lat, lng) => {
  return {
    type: POSITION,
    lat,
    lng
  }
};

export { position }
