import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddCar extends Component {
    state = { 
        make: '',
        model: '',
        year: '',
     }

     handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
      }

    //   handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await userService.signup(this.state);
    //       // Let <App> know a user has signed up!
    //       this.props.handleSignupOrLogin();
    //       // Successfully signed up - show GamePage
    //       this.props.history.push('/');
    //     } catch (err) {
    //       // Invalid user data (probably duplicate email)
    //       this.props.updateMessage(err.message);
    //     }
    //   }

        isFormInvalid() {
            return !(this.state.make && this.state.model && this.state.year);
        }

    render() { 
        return ( 
        <div>
            <header className="header-footer">Sign Up</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
                <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Name" value={this.state.make} name="name" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                <input type="email" className="form-control" placeholder="Email" value={this.state.model} name="email" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Password" value={this.state.year} name="password" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
                </div>
            </div>
            </form>
        </div>
         );
    }
}
 
export default AddCar;