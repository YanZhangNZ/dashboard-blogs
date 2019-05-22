import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProject from '../../store/actions/projectActions'



class CreateProject extends Component {
    state = {
        title:'',
        content:'',
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //when submitting, we execute this function to dispatch the action to create new project.
        debugger;
        this.props.createProject(this.state);
    }

    render(){
        console.log('after map dispatch to props:',this.props);
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
//whatever we cant to add to props, we add to this object.
//so when props.createProject, we execute the function to dispatch an action createProject
const mapDispatchToProps = (dispatch) => {
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}

//we dont have mapStateToProps here so null
export default connect(null,mapDispatchToProps)(CreateProject)