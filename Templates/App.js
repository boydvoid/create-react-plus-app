 module.exports = `import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/firestore'
import { auth } from './Firebase/Firebase'
import PropTypes from 'prop-types'
//react router
import {BrowserRouter, Route, Switch } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import { authenticate } from './Actions/authenticateActions'

//import Components
import Home from './Components/Pages/Home/Home'

let db = firebase.firestore();

class App extends Component {
  componentWillMount()
  {
    auth.onAuthStateChanged((user) => 
    {
      if(user)
      {
        console.log(this.props.isAuthenticated);
       this.props.authenticate();
      } else 
      {
        console.log(this.props.isAuthenticated);
      }
    })
  }
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          
            <Route path ="/" exact component = {Home} />
      
         
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

//set your proptypes
App.propTypes = {
  authenticate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

//map the state to the props of this component
const mapStateToProps = state => ({
  //set the prop to the state from your root reducer and whatever your payload from the reducer is ex. props: state.yourstate.payload
  isAuthenticated: state.authentication.authenticated
}); 
export default connect(mapStateToProps, {authenticate}) (App);`
