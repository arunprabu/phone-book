import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; //css 

//import Custom Components
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import ContactList from './components/contacts/ContactList';
import About from './components/about/About';

//Root component -- can do the layout 
class App extends Component {
  // it renders the JSX
  render() {
    return ( 
      <div>
        <Header />

        <div className="marginFix container">
          <main>
            main area
            <ContactList pagination="8"/>
            
            <hr />

            <About />
          </main>

          <Footer year="2019" companyName="CGI">
            Phone book app built in Feb 2019
          </Footer>
          {/* <Footer year="2020"/> */}


          
        </div>
      </div> 

    ); 

    // creating returnable element using js
    // return React.createElement( 'div', { className: 'red'}, 
    //                              React.createElement('h1', null, 'wow')
    //                            );
  }
}

export default App;
