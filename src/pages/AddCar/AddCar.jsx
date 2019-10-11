import React, { Component } from 'react'
import CreateCarForm from '../../components/CreateCarForm/CreateCarForm'

class CarPage extends Component {
    state = { 
        message: ''
     }

    render() { 
        return ( 
            <div>
                <CreateCarForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
         );
    }
}
 
export default CarPage;