import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import * as car from '../../utils/cars'

class CreateCarForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      make: '',
      model: '',
      year: '',
    }
  };

  formRef = React.createRef();

  handleAddCar = async newCarData => {
    const newCar = await car.create(newCarData);
    this.setState(state => ({
      puppies: [...state.cars, newCar]
    }), () => this.props.history.push('/'));
  }

  handleUpdatePuppy = async updatedCarData => {
    const updatedCar = await car.update(updatedCarData);
    const newCarsArray = this.state.puppies.map(p => 
      p._id === updatedCar._id ? updatedCar : p
    );
    this.setState(
      {puppies: newCarsArray},
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  }

  handleDeleteCar= async id => {
    await car.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      puppies: state.cars.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddCar(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.make]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Add Car</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Car Make</label>
            <input
              className="form-control"
              name="make"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Car Model</label>
            <input
              className="form-control"
              name="model"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Model Year</label>
            <input
              className="form-control"
              name="year"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD CAR
          </button>
        </form>
      </>
    );
  }
}

export default CreateCarForm;