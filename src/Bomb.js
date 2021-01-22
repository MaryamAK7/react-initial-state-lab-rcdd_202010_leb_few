// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super()
     this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
   
    let message="";
    if(this.state.secondsLeft===0){
      message=
    }
    return(
      
      <div> </div>)
  }
  
}