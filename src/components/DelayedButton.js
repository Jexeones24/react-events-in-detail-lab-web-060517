// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
  constructor(props){
    super(props);
  }
  clickEvent = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)

  }

  render(){
    return <button onClick={this.clickEvent}></button>
  }
}


export default DelayedButton;
