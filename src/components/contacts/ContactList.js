// class component -- stateful comp - smart component
import React, { Component } from 'react';
import axios from 'axios';  // for rest api calls

class ContactList extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: [
        { id: 1, name: "John", email: 'john@example.com', phone: 23422 },
        { id: 2, name: "Williams", email: 'will@example.com', phone: 4532 }
      ]
    }
    

    console.log("Inside Constructor");
    console.log(props);

    //DONT DO: AJAX calls 
  }

  componentWillMount(){
    console.log("Inside Component will Mount");
    // deprecated
  }

  componentDidMount(){
    console.log("Inside Component Did Mount -- send ajax calls");
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          console.log(response.data);
          //ToDo: Assign in state
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  onUpdateContactHandler = () => {
    console.log("Update Contact Clicked");

    //mutate the state
    this.setState({
      contacts: [
        { id: 1, name: "Peter", email: 'peter@example.com', phone: 23422 },
        { id: 2, name: "Williams", email: 'will@example.com', phone: 4532 }
      ]
    });
    
  }

  onNameChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      contacts: [
        { id: 1, name: event.target.value, email: 'peter@example.com', phone: 23422 },
        { id: 2, name: "John", email: 'john@example.com', phone: 4532 }
      ]
    });
  }

  // it renders the JSX
  render() {
    console.log("Render");
    // if state changes -- this will get executed again -- re-rendering

    let availableContacts = this.state.contacts.length;

    //conditional rendering ourside JSX
    let contactList = null;
    if(this.state.contacts && this.state.contacts.length > 0){

      //looping thru ES6 
      contactList = ( this.state.contacts.map( (contact, index) => {
                        console.log(contact);
                        return (
                          <div className="card col-md-3" key={index}>
                            <div className="card-body">
                              <h5 className="card-title">{contact.name}</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="link">View Details</a>
                            </div>
                          </div> 
                        )
                    }));
    }else{
      contactList = (
        <div className="alert alert-danger col-md-12" role="alert">
          Sorry! No contact found
        </div>
      )
    }

    const myStyle = { 
                      backgroundColor: 'red',
                      textAlign: 'right'
                    }

    return ( 
      <div>
        <div>
          <p style={myStyle}>Total Contacts: {availableContacts}</p>
          <h1>Contact List - <small className="text-muted">Displaying : {this.props.pagination}</small></h1>
          <button className="btn btn-primary" onClick={this.onUpdateContactHandler}>Update Contact</button>
          <br />
          <input type="text" onChange={this.onNameChange} />
        </div>
        <div className="row">
          {contactList}

          {/* Conditional Rendering within JSX */}
          {/* {
            this.state.contacts && this.state.contacts.length > 0? 
            <div className="card col-md-3">
              <div className="card-body">
                <h5 className="card-title">{this.state.contacts[0].name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="link">View Details</a>
              </div>
            </div> : 
            <div className="alert alert-danger col-md-12" role="alert">
              Sorry! No contact found
            </div>
          } */}
          
        </div>
      </div>
    )
  }
}

export default ContactList;

