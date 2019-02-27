// class component -- stateful comp - smart component
import React, { Component } from 'react';

class About extends Component {

  constructor(props){
    super(props);
    this.state = {
      topic: 'React'
    }
  }

  onTextChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  render(){
    return(
      <div>
        <p>I am learning {this.state.topic}</p>
        <input type="text" onChange={this.onTextChange} value={this.state.topic} />
        {/* if you remove onChange it will throw an error in console */}
      </div>
    )
  }
}
export default About;