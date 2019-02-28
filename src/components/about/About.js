// class component -- stateful comp - smart component
import React, { Component } from 'react';

class About extends Component {

  constructor(props){
    super(props);
    this.state = {
      topic: 'React'
    }
  }

  onTxtChange = (event) => {
    console.log(event.target.value);

    this.setState({
      topic: event.target.value
    });
  }

  render(){
    return(
      <div>
        <p>I am learning {this.state.topic}</p>
        Course Name: <input type="text" onChange={this.onTxtChange} value={this.state.topic}/>
        {/* if you remove onChange it will throw an error in console */}
      </div>
    )
  }
}
export default About;