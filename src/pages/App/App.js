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
    ...this.getInitialState(),
    user: userService.getUser()
   }

   getInitialState() {
    return {
      locked: true,
      windows: true,
      temp: null,
      running: true,
    };
  }

  handleLockClick = () => {
      this.setState(prevState => (
        { locked: !prevState.locked }));
  }
  handleStartStopClick = () => {
      this.setState(prevState => (
        { running: !prevState.running }));
  }
  handleWindowClick = () => {
      this.setState(prevState => (
        { windows: !prevState.windows }));
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
        <h2>
          Status
        </h2>
          <span>{this.state.locked ? 'Locked' : 'Unlocked'}</span>
          <span>{this.state.running ? 'Running' : 'Not Running'}</span>
          <span>{this.state.windows ? 'Closed' : 'Open'}</span>
          {this.state.temp}
          <Switch>
          <Route exact path='/' render={() =>
              <CarRemote
                locked={this.state.locked}
                windows={this.state.windows}
                temp={this.state.temp}
                running={this.state.running}
                user={this.state.user}
                handleLockClick={this.handleLockClick}
                handleStartStopClick={this.handleStartStopClick}
                handleWindowClick={this.handleWindowClick}
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
