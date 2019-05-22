import React, { Component } from 'react'
import Notifications from './Notification'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux' //connect this comp with store

class Dashboard extends Component {
    render(){
        
    console.log('after map state to props:',this.props);//we get data from store because mapStateToProps
    const {projects}=this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
} 

//in this way, dashboard component gets the data from reducer or from store.
const mapStateToProps = (state) => {

    //store-> state->project/auth(look at reducers) -> projects(look at the projectReducer)
    return{
        projects:state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)