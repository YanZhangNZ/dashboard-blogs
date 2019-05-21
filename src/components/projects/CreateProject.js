import React, { Component } from 'react'


export default class CreateProject extends Component {
    state = {
        title:'',
        content:'',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('create prject:',this.state);
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
                    <h5 className="grey-text text-darken-3">create project</h5>
                    <div className="input-field">
                        <label htmlform='title'>title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlform='content'>content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }

}