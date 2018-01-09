import React from 'react';
const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class App extends React.Component {
  constructor() {
    super();
    this.state
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }

  componentDidMount() {
    let position = EIFFEL_TOWER_POSITION
    this.map = new google.maps.Map(this.refs.map, {
      center: position,
      zoom: 15
    });
    let marker = new google.maps.Marker({
      position: EIFFEL_TOWER_POSITION,
      map: this.map
    })
  }

  panToArcDeTriomphe() {
    console.log(this)
    this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <button onClick={this.panToArcDeTriomphe}>Go to Arc De Triomphe</button>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

export default App
