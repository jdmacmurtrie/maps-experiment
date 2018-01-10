import React from 'react';
import { connect } from 'react-redux';
import { position } from '../actions/position'

const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.8,
  lng: 2.2
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }

  componentDidMount() {
    debugger
    let mapPosition = { lat: this.props.lat, lng: this.props.lng }
    this.map = new google.maps.Map(this.refs.map, {
      center: mapPosition,
      zoom: 15
    });
    let marker = new google.maps.Marker({
      position: mapPosition,
      map: this.map
    })
  }

  panToArcDeTriomphe() {
    this.props.position(ARC_DE_TRIOMPHE_POSITION.lat, ARC_DE_TRIOMPHE_POSITION.lng)
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

const mapDispatchToProps = (dispatch) => {
  return {
    position: (lat, lng) => dispatch(position(lat, lng))
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    lat: state.lat,
    lng: state.lng
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
