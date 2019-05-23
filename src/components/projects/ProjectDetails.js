import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    
    // const id = props.match && props.match.params.id;
    console.log('project details props:',props);
    const { project } = props;
    if(project)
    {return(
        <div className="container section project-details">            
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{ project.title }</span>                    
                    <p>{ project.content }</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by { project.authorFirstName } {project.authorLastName }</div>
                    <div>Posted at: </div>
                </div>
            </div>
        </div>
    )}else{
        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
    
}

const matStateToProps = (state,ownProps) => {
    console.log('get state from store for project detail:',state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]:null;
    return{
        project: project
    }
}
export default compose(
    connect(matStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails);