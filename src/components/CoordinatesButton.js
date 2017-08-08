// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }
  coordinates = (e) => {
    this.setState({x: e.clientX, y: e.clientY});
    let newCoords = [this.state.x, this.state.y]
    this.props.onReceiveCoordinates(newCoords)
  }

  render(){
    return (<button onClick={this.coordinates}>{}</button>
    )
  }
}





export default CoordinatesButton;
