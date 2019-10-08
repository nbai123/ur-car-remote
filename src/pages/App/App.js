import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from '../../logo.svg';
import userService from '../../utils/userService';
import { PromiseProvider } from 'mongoose';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage'
import CarRemote from '../CarRemote/CarRemote';

class App extends Component {
  state = {
    locked: true,
    windows: 'closed',
    temp: null,
    running: true, 
    user: userService.getUser()
   }

   handleSignuporLogin = () => {
     this.setState ({user: userService.getUser()});
   }

  render() { 
    return ( 
      <div>
        <h1>
          Ur Car Remote
        </h1>
          <Switch>
          <Route exact path='/' render={() =>
              <CarRemote
                user={this.state.user}
              />
            }/>
            <Route exact path='/signup' render={({ history}) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
          </Switch>
      </div>
     );
  }
}
 
export default App;
