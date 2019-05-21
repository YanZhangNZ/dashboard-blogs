import React, { Component } from 'react'


export default class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit sign up',this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">sign up</h5>
                    <div className="input-field">
                        <label htmlform='email'>Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlform='password'>password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlform='firstName'>first name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlform='lastName'>last name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">sign up</button>
                    </div>
                </form>
            </div>
        )
    }

}