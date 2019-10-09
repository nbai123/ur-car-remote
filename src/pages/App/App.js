import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from '../../logo.svg';
import userService from '../../utils/userService';
import { PromiseProvider } from 'mongoose';
import SignupPage from '../SignupPage/SignupPage'
import CarRemote from '../../components/CarRemote/CarRemote';

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
                locked={this.state.locked}
                windows={this.state.windows}
                temp={this.state.temp}
                running={this.state.running}
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
