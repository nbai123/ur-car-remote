import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from '../../logo.svg';
import userService from '../../utils/userService';
import { PromiseProvider } from 'mongoose';
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import CarRemote from '../../components/CarRemote/CarRemote';
import AddCar from '../AddCar/AddCar'

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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

   handleSignupOrLogin = () => {
     this.setState({user: userService.getUser()});
   }

  render() { 
    return (
      <div>
        <h1>
          Ur Car Remote
        </h1>
        
          <Switch>
          <Route exact path='/' render={() =>
            userService.getUser() ?
            <div>
              <CarRemote
                locked={this.state.locked}
                windows={this.state.windows}
                temp={this.state.temp}
                running={this.state.running}
                handleLogout={this.handleLogout}
                user={this.state.user}
                handleLockClick={this.handleLockClick}
                handleStartStopClick={this.handleStartStopClick}
                handleWindowClick={this.handleWindowClick}
              />
              <h2>
                Status
              </h2>
                <span>{this.state.locked ? 'Locked' : 'Unlocked'}</span>
                <span>{this.state.running ? 'Running' : 'Not Running'}</span>
                <span>{this.state.windows ? 'Closed' : 'Open'}</span>
                <span>{this.state.temp}</span>
            </div>
              :
              <Redirect to='/login' />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
            <Route exact path='/signup' render={({ history}) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
            <Route exact path='/createcar' render={({ history}) =>
              <AddCar
                history={history}
                />
              }/>
          </Switch>
      </div>
     );
  }
}
 
export default App;
